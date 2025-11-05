TOOLS
    configure prettier
    Get Prettier working for <leader>f and format on write
CODE
    make card flip more realistic
    extract Board from App 
    make row style independent of card height by moving card-related styles
        from row to board e.g. min-height
    configure vim eslint lsp and npm eslint to match
    move cards urls to their own module?
STYLE
    consider where to store images:
    src/
    public/
    API with useEffect to retreive
    My images are static and unchanging.
    I could retreive them from Wikimedia
    fix jank when hovering top card from below
    remove white area from aroun cards (check Luke smith video)
    don't hover top card if max card already drawn
    center drawn cards
    shadow effect on hovered card
    prevent cards from shrinking to fit screen; have them be static sized based on scren width
    idea: instead of rendering div onClick, have the card divs already spaced out and insert a card
    prompt "click the deck to draw a card."
    get/make better card assets
    apply card border style (white border with rounded edges)
    check that all cards are the same height and width
FEATURES
    showcase: display modal with art and text
    make rotating loader image, test with 3G connection simulation in devtools
    user login via google etc.
    save history of user's readings to DB
