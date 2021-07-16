//person.js

function display(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    return (fname + " " + lname)
}
module.exports = { display: display }