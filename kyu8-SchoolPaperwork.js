/* Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
our task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0. */


const paperwork = (classmates, pages) => {
    if (typeof(classmates) !== 'number' || typeof(pages) !== 'number') return 0;
    if (classmates <0 || pages <0) return 0;

    return classmates * pages;
}