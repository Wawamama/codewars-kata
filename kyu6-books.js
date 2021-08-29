function stockList(listOfArt, listOfCat){
    
    let results = []

    const filteredItems = listOfArt.filter(art => {
        if (listOfCat.includes(art.charAt(0))) return true
    })
    console.log(filteredItems)

    listOfCat.forEach(category => {
        for (let i=0; i<filteredItems.length; i++) {
            if (category === filteredItems[i].charAt(0)) {
                results.push({ cat: category, quant: filteredItems[i].split(' ')[1] * 1})
            } else {
                results.push( { cat: category, quant: 0 })

            }
        }

    })

    const final = Object.values(results.reduce((c, {cat,quant}) => {
        c[cat] = c[cat] || {cat , quant: 0};
        c[cat].quant += quant;
        return c;
    }, {}));

    let stringArray = []
    
    final.forEach(el => {
        stringArray.push(`(${el.cat} : ${el.quant})`)
    })
  
    res = stringArray.join(' - ')

    return res
}

stockList(["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"])

// Push dans un tableau des objets
// {cat: A, quantity: 2}, ...

// Pour chaque categorie de listOfCat :
// Loop through listOfArt pour trouver les articles qui commencent par la cat
// Si on en trouve pas : { cat: A, quant: 0 }
// Si on en trouve : { cat: B, quant: 12 }
// Reduce pour rassembler les categories

