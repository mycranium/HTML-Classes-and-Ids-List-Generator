# HTML-Classes-and-Ids-List-Generator
A small js that generates a downloadable tsv list of tagname, id and classes for all page elements that have ids or classes.

I made this to reduce the labor required to get selectors into a css file.

Add the script link to your page with the 'defer' attribute.

The script will create a button and append it to the bottom of the body element. Clicking the button will generate a list of elements that have classes or ids, and will ignore any elements that don't have either of those attributes. The script will generate a plaintext file with the extension '.tsv' (tab-separated values) which can be opened in spreadsheet applications such as Google Sheets or MS Excel.

If you have your browser downloads set to automatic, the file will go to your specified downloads folder. If you have your browser set to ask for each download, you can edit the name of the file and specify its save location.

The list will show the tagname, id and classes for each element, with each class in a separate column. It will include elements with the 'hidden' attribute as well as template elements and their children.