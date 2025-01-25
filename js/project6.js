const elements = [
    { atomicNumber: 1, symbol: "H", name: "Hydrogen", group: "Nonmetal", position: 1 },
    { atomicNumber: 2, symbol: "He", name: "Helium", group: "Noble Gas", position: 18 },
    { atomicNumber: 3, symbol: "Li", name: "Lithium", group: "Alkali Metal", position: 19 },
    { atomicNumber: 4, symbol: "Be", name: "Beryllium", group: "Alkaline Earth Metal", position: 20 },
    { atomicNumber: 5, symbol: "B", name: "Boron", group: "Metalloid", position: 31 },
    { atomicNumber: 6, symbol: "C", name: "Carbon", group: "Nonmetal", position: 32 },
    { atomicNumber: 7, symbol: "N", name: "Nitrogen", group: "Nonmetal", position: 33 },
    { atomicNumber: 8, symbol: "O", name: "Oxygen", group: "Nonmetal", position: 34 },
    { atomicNumber: 9, symbol: "F", name: "Fluorine", group: "Halogen", position: 35 },
    { atomicNumber: 10, symbol: "Ne", name: "Neon", group: "Noble Gas", position: 36 },
    { atomicNumber: 11, symbol: "Na", name: "Sodium", group: "Alkali Metal", position: 37 },
    { atomicNumber: 12, symbol: "Mg", name: "Magnesium", group: "Alkaline Earth Metal", position: 38 },
    { atomicNumber: 13, symbol: "Al", name: "Aluminum", group: "Post-Transition Metal", position: 49 },
    { atomicNumber: 14, symbol: "Si", name: "Silicon", group: "Metalloid", position: 50 },
    { atomicNumber: 15, symbol: "P", name: "Phosphorus", group: "Nonmetal", position: 51 },
    { atomicNumber: 16, symbol: "S", name: "Sulfur", group: "Nonmetal", position: 52 },
    { atomicNumber: 17, symbol: "Cl", name: "Chlorine", group: "Halogen", position: 53 },
    { atomicNumber: 18, symbol: "Ar", name: "Argon", group: "Noble Gas", position: 54 },
    { atomicNumber: 19, symbol: "K", name: "Potassium", group: "Alkali Metal", position: 55 },
    { atomicNumber: 20, symbol: "Ca", name: "Calcium", group: "Alkaline Earth Metal", position: 56 },
    { atomicNumber: 21, symbol: "Sc", name: "Scandium", group: "Transition Metal", position: 57 },
    { atomicNumber: 22, symbol: "Ti", name: "Titanium", group: "Transition Metal", position: 58 },
    { atomicNumber: 23, symbol: "V", name: "Vanadium", group: "Transition Metal", position: 59 },
    { atomicNumber: 24, symbol: "Cr", name: "Chromium", group: "Transition Metal", position: 60 },
    { atomicNumber: 25, symbol: "Mn", name: "Manganese", group: "Transition Metal", position: 61 },
    { atomicNumber: 26, symbol: "Fe", name: "Iron", group: "Transition Metal", position: 62 },
    { atomicNumber: 27, symbol: "Co", name: "Cobalt", group: "Transition Metal", position: 63 },
    { atomicNumber: 28, symbol: "Ni", name: "Nickel", group: "Transition Metal", position: 64 },
    { atomicNumber: 29, symbol: "Cu", name: "Copper", group: "Transition Metal", position: 65 },
    { atomicNumber: 30, symbol: "Zn", name: "Zinc", group: "Transition Metal", position: 66 },
    { atomicNumber: 31, symbol: "Ga", name: "Gallium", group: "Post-Transition Metal", position: 67 },
    { atomicNumber: 32, symbol: "Ge", name: "Germanium", group: "Metalloid", position: 68 },
    { atomicNumber: 33, symbol: "As", name: "Arsenic", group: "Metalloid", position: 69 },
    { atomicNumber: 34, symbol: "Se", name: "Selenium", group: "Nonmetal", position: 70 },
    { atomicNumber: 35, symbol: "Br", name: "Bromine", group: "Halogen", position: 71 },
    { atomicNumber: 36, symbol: "Kr", name: "Krypton", group: "Noble Gas", position: 72 },
    { atomicNumber: 37, symbol: "Rb", name: "Rubidium", group: "Alkali Metal", position: 73 },
    { atomicNumber: 38, symbol: "Sr", name: "Strontium", group: "Alkaline Earth Metal", position: 74 },
    { atomicNumber: 39, symbol: "Y", name: "Yttrium", group: "Transition Metal", position: 75 },
    { atomicNumber: 40, symbol: "Zr", name: "Zirconium", group: "Transition Metal", position: 76 },
    { atomicNumber: 41, symbol: "Nb", name: "Niobium", group: "Transition Metal", position: 77 },
    { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", group: "Transition Metal", position: 78 },
    { atomicNumber: 43, symbol: "Tc", name: "Technetium", group: "Transition Metal", position: 79 },
    { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", group: "Transition Metal", position: 80 },
    { atomicNumber: 45, symbol: "Rh", name: "Rhodium", group: "Transition Metal", position: 81 },
    { atomicNumber: 46, symbol: "Pd", name: "Palladium", group: "Transition Metal", position: 82 },
    { atomicNumber: 47, symbol: "Ag", name: "Silver", group: "Transition Metal", position: 83 },
    { atomicNumber: 48, symbol: "Cd", name: "Cadmium", group: "Transition Metal", position: 84 },
    { atomicNumber: 49, symbol: "In", name: "Indium", group: "Post-Transition Metal", position: 85 },
    { atomicNumber: 50, symbol: "Sn", name: "Tin", group: "Post-Transition Metal", position: 86 },
    { atomicNumber: 51, symbol: "Sb", name: "Antimony", group: "Metalloid", position: 87 },
    { atomicNumber: 52, symbol: "Te", name: "Tellurium", group: "Metalloid", position: 88 },
    { atomicNumber: 53, symbol: "I", name: "Iodine", group: "Halogen", position: 89 },
    { atomicNumber: 54, symbol: "Xe", name: "Xenon", group: "Noble Gas", position: 90 },
    { atomicNumber: 55, symbol: "Cs", name: "Cesium", group: "Alkali Metal", position: 91 },
    { atomicNumber: 56, symbol: "Ba", name: "Barium", group: "Alkaline Earth Metal", position: 92 },
    { atomicNumber: 57, symbol: "La", name: "Lanthanum", group: "Lanthanide", position: 148 },
    { atomicNumber: 58, symbol: "Ce", name: "Cerium", group: "Lanthanide", position: 149 },
    { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", group: "Lanthanide", position: 150 },
    { atomicNumber: 60, symbol: "Nd", name: "Neodymium", group: "Lanthanide", position: 151 },
    { atomicNumber: 61, symbol: "Pm", name: "Promethium", group: "Lanthanide", position: 152 },
    { atomicNumber: 62, symbol: "Sm", name: "Samarium", group: "Lanthanide", position: 153 },
    { atomicNumber: 63, symbol: "Eu", name: "Europium", group: "Lanthanide", position: 154 },
    { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", group: "Lanthanide", position: 155 },
    { atomicNumber: 65, symbol: "Tb", name: "Terbium", group: "Lanthanide", position: 156 },
    { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", group: "Lanthanide", position: 157 },
    { atomicNumber: 67, symbol: "Ho", name: "Holmium", group: "Lanthanide", position: 158 },
    { atomicNumber: 68, symbol: "Er", name: "Erbium", group: "Lanthanide", position: 159 },
    { atomicNumber: 69, symbol: "Tm", name: "Thulium", group: "Lanthanide", position: 160 },
    { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", group: "Lanthanide", position: 161 },
    { atomicNumber: 71, symbol: "Lu", name: "Lutetium", group: "Lanthanide", position: 162 },
    { atomicNumber: 72, symbol: "Hf", name: "Hafnium", group: "Transition Metal", position: 94 },
    { atomicNumber: 73, symbol: "Ta", name: "Tantalum", group: "Transition Metal", position: 95 },
    { atomicNumber: 74, symbol: "W", name: "Tungsten", group: "Transition Metal", position: 96 },
    { atomicNumber: 75, symbol: "Re", name: "Rhenium", group: "Transition Metal", position: 97 },
    { atomicNumber: 76, symbol: "Os", name: "Osmium", group: "Transition Metal", position: 98 },
    { atomicNumber: 77, symbol: "Ir", name: "Iridium", group: "Transition Metal", position: 99 },
    { atomicNumber: 78, symbol: "Pt", name: "Platinum", group: "Transition Metal", position: 100 },
    { atomicNumber: 79, symbol: "Au", name: "Gold", group: "Transition Metal", position: 101 },
    { atomicNumber: 80, symbol: "Hg", name: "Mercury", group: "Transition Metal", position: 102 },
    { atomicNumber: 81, symbol: "Tl", name: "Thallium", group: "Post-Transition Metal", position: 103 },
    { atomicNumber: 82, symbol: "Pb", name: "Lead", group: "Post-Transition Metal", position: 104 },
    { atomicNumber: 83, symbol: "Bi", name: "Bismuth", group: "Post-Transition Metal", position: 105 },
    { atomicNumber: 84, symbol: "Po", name: "Polonium", group: "Metalloid", position: 106 },
    { atomicNumber: 85, symbol: "At", name: "Astatine", group: "Metalloid", position: 107 },
    { atomicNumber: 86, symbol: "Rn", name: "Radon", group: "Noble Gas", position: 108 },
    { atomicNumber: 87, symbol: "Fr", name: "Francium", group: "Alkali Metal", position: 109 },
    { atomicNumber: 88, symbol: "Ra", name: "Radium", group: "Alkaline Earth Metal", position: 110 },
    { atomicNumber: 89, symbol: "Ac", name: "Actinium", group: "Actinide", position: 166 },
    { atomicNumber: 90, symbol: "Th", name: "Thorium", group: "Actinide", position: 167 },
    { atomicNumber: 91, symbol: "Pa", name: "Protactinium", group: "Actinide", position: 168 },
    { atomicNumber: 92, symbol: "U", name: "Uranium", group: "Actinide", position: 169 },
    { atomicNumber: 93, symbol: "Np", name: "Neptunium", group: "Actinide", position: 170 },
    { atomicNumber: 94, symbol: "Pu", name: "Plutonium", group: "Actinide", position: 171 },
    { atomicNumber: 95, symbol: "Am", name: "Americium", group: "Actinide", position: 172 },
    { atomicNumber: 96, symbol: "Cm", name: "Curium", group: "Actinide", position: 173 },
    { atomicNumber: 97, symbol: "Bk", name: "Berkelium", group: "Actinide", position: 174 },
    { atomicNumber: 98, symbol: "Cf", name: "Californium", group: "Actinide", position: 175 },
    { atomicNumber: 99, symbol: "Es", name: "Einsteinium", group: "Actinide", position: 176 },
    { atomicNumber: 100, symbol: "Fm", name: "Fermium", group: "Actinide", position: 177 },
    { atomicNumber: 101, symbol: "Md", name: "Mendelevium", group: "Actinide", position: 178 },
    { atomicNumber: 102, symbol: "No", name: "Nobelium", group: "Actinide", position: 179 },
    { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", group: "Actinide", position: 180 },
    { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", group: "Transition Metal", position: 112 },
    { atomicNumber: 105, symbol: "Db", name: "Dubnium", group: "Transition Metal", position: 113 },
    { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", group: "Transition Metal", position: 114 },
    { atomicNumber: 107, symbol: "Bh", name: "Bohrium", group: "Transition Metal", position: 115 },
    { atomicNumber: 108, symbol: "Hs", name: "Hassium", group: "Transition Metal", position: 116 },
    { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", group: "Transition Metal", position: 117 },
    { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", group: "Transition Metal", position: 118 },
    { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", group: "Transition Metal", position: 119 },
    { atomicNumber: 112, symbol: "Cn", name: "Copernicium", group: "Transition Metal", position: 120 },
    { atomicNumber: 113, symbol: "Nh", name: "Nihonium", group: "Post-Transition Metal", position: 121 },
    { atomicNumber: 114, symbol: "Fl", name: "Flerovium", group: "Post-Transition Metal", position: 122 },
    { atomicNumber: 115, symbol: "Mc", name: "Moscovium", group: "Post-Transition Metal", position: 123 },
    { atomicNumber: 116, symbol: "Lv", name: "Livermorium", group: "Post-Transition Metal", position: 124 },
    { atomicNumber: 117, symbol: "Ts", name: "Tennessine", group: "Halogen", position: 125 },
    { atomicNumber: 118, symbol: "Og", name: "Oganesson", group: "Noble Gas", position: 126 }
    // Add all other elements
];

const table = document.getElementById("periodic-table");
const searchBar = document.getElementById("search-bar");
const elementDetails = document.getElementById("element-details");

// Create a grid with empty spaces and elements
function createPeriodicTable() {
    for (let i = 1; i <= 180; i++) {
        const element = elements.find((el) => el.position === i);
        const cell = document.createElement("div");

        if (element) {
            cell.classList.add("element");
            cell.dataset.atomicNumber = element.atomicNumber;
            cell.dataset.group = element.group;
            cell.innerHTML = `
          <strong>${element.symbol}</strong>
          <small>${element.atomicNumber}</small>
        `;
            cell.addEventListener("click", () => displayElementDetails(element));
        } else {
            cell.classList.add("element", "empty");
        }

        table.appendChild(cell);
    }
}

// Display element details when clicked
function displayElementDetails(element) {
    document.querySelectorAll(".element").forEach((el) => {
        el.classList.remove("highlight");
        el.classList.remove("group-highlight");
    });

    const selectedElement = document.querySelector(`[data-atomic-number='${element.atomicNumber}']`);
    selectedElement.classList.add("highlight");

    document.querySelectorAll(`[data-group='${element.group}']`).forEach((el) => {
        el.classList.add("group-highlight");
    });

    elementDetails.innerHTML = `
      <p><strong>Name:</strong> ${element.name}</p>
      <p><strong>Symbol:</strong> ${element.symbol}</p>
      <p><strong>Atomic Number:</strong> ${element.atomicNumber}</p>
      <p><strong>Group:</strong> ${element.group}</p>
    `;
}

// Search functionality
searchBar.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll(".element").forEach((el) => {
        if (!el.classList.contains("empty")) {
            const element = elements.find((elem) => elem.atomicNumber == el.dataset.atomicNumber);
            const matchesQuery =
                element.name.toLowerCase().includes(query) ||
                element.symbol.toLowerCase().includes(query) ||
                String(element.atomicNumber).includes(query);

            el.style.display = matchesQuery ? "block" : "none";
        }
    });
});

// Initialize table
createPeriodicTable();