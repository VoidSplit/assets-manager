// --- DOM PARENTS ---
const catalog_content = document.getElementById('catalog_content')
const number_of_models = document.getElementById('number_of_models')

// --- CONFIG ---
const NB_FILES = 25
const BLACKLIST = new Set([])

// --- HELPERS ---
const idOf = (n, width = 4) => String(n).padStart(width, "0")

async function fetchOne(id) {
  const url = `res/assets_list/assets/${id}.json`

  try {
    const res = await fetch(url, { cache: "no-store" })

    if (!res.ok) {
      console.log(`Skip ${id}.json → HTTP ${res.status}`)
      return { id, error: `HTTP ${res.status}` }
    }

    try {
      const json = await res.json()
      return { id, content: json }
    } catch (e) {
      console.log(`Skip ${id}.json → invalid JSON`)
      return { id, error: "invalid_json", message: e.message }
    }
  } catch (e) {
    console.log(`Skip ${id}.json → network error`)
    return { id, error: "network", message: e.message }
  }
}

async function loadAllExceptBlacklist() {
  const results = []
  for (let i = 1; i <= NB_FILES; i++) {
    const id = idOf(i)
    if (BLACKLIST.has(id)) continue

    const item = await fetchOne(id)
    results.push(item)
  }
  return results
}

// --- MAIN ---
document.addEventListener("DOMContentLoaded", async () => {
  const searchInput = document.getElementById("search")

  const all = await loadAllExceptBlacklist()

  number_of_models.innerText = `${all.length}`

  // render the list
  function renderList(filter = "") {
    catalog_content.innerHTML = ""
    // OK
    all.filter(el => 
      el.content.id.toLowerCase().trim().includes(filter.toLowerCase().trim()) ||
      el.content.tags.some(t => t.toLowerCase().trim().includes(filter.toLowerCase().trim())) ||
      el.content.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    ).filter(r => r.content).forEach(el => {
        asset = el.content

        let DOM = document.createElement('div')
        DOM.classList = "card"

        let name_row = document.createElement('div')
        name_row.classList = "name-row"
        
        let name_row_p = document.createElement('p')
        name_row_p.classList = "name"
        name_row_p.innerText = `${asset.name}`
        let name_row_span = document.createElement('span')
        name_row_span.innerText = `#${asset.id}`

        let image = document.createElement('div')
        image.classList = "image"
        image.style.backgroundImage = `url("https://voidsplit.github.io/assets-manager/res/medias/trees/${asset.img_paths[0]}.png")`


        let tag_list = document.createElement('div')
        tag_list.classList = "tag-list"

        asset.tags.forEach(tag => {
            let tag_dom = document.createElement("span")
            tag_dom.innerText = tag
            tag_list.append(tag_dom)
        })


        let info_list = document.createElement('div')
        info_list.classList = "info-list"

        let info_list_coords = document.createElement('div')
        info_list_coords.classList = "coords"

        let info_list_coords_value = document.createElement('div')
        info_list_coords_value.classList = "value"

        info_list_coords_value.innerHTML = `
            <div class="coords-inner"><span>x</span>${asset.coords.x}</div>
            <div class="coords-inner"><span>y</span>${asset.coords.y}</div>
            <div class="coords-inner"><span>z</span>${asset.coords.z}</div>
        `
        let info_list_size = document.createElement('div')
        info_list_size.classList = "size"
        let info_list_size_value = document.createElement('div')
        info_list_size_value.classList = "value"
        info_list_size_value.innerHTML = `
            <div class="size-inner"><span>w</span>${asset.size.width}</div>
            <div class="size-inner"><span>l</span>${asset.size.length}</div>
            <div class="size-inner"><span>h</span>${asset.size.height}</div>
        `

        let button = document.createElement("button")
        button.textContent = "Voir plus"

        catalog_content.append(DOM)
        DOM.append(name_row, image, tag_list, info_list, button)
        name_row.append(name_row_p, name_row_span)

        info_list.append(info_list_coords,)
        info_list_coords.append(info_list_coords_value)
        info_list_size.append(info_list_size_value)
    })
  }

  // INIT
  renderList();

  // Search bar
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value
    renderList(value)
  })

})