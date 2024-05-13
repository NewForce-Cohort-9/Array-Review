// forEach()
// filter()
// map()
// find()
// reduce()
// sort()


import { businessArray } from "./businesses.js"
import { NYBusinessArray } from "./newYorkbusiness.js"
import { purchasingAgents } from "./purchasingAgents.js"
import { companySearch } from "./companySearch.js"

const mainContainer = document.querySelector("#container")

export const render = () => {

    const businessHTML = businessArray() //forEach
    const NYBusinessHTML = NYBusinessArray()
    const companySearchHTML = companySearch()
    // const purchasingAgentHTML = purchasingAgents()
    const composedHTML = `

    <article class="choices">
        <section class="choices__metals options">
            <h2>Businesses</h2>
            </section>
           

    `

    mainContainer.innerHTML = composedHTML
}

render()