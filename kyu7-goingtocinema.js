const movie = (card, ticket, perc) => {
    let n =1
    let newPrice = ticket * perc;
    let systemA = ticket * n;
    let systemB = card + newPrice;
    while (systemA < Math.ceil(systemB)) {
      n++;
      newPrice *= perc;
      systemB += newPrice;
      systemA = ticket * n;
    }
    
  return n;
    
};
