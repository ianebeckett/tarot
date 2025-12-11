TOOLS
    replace prettier, eslint, quick-lint-js with Biome
PROJECT
    mmake stylesheets
    make readme
    record video demo for readme
FEATURES
    make images smaller?
    implement responsive images for mobile? theyre already small
    else: preroll cards and load results so they have tim to render
    showcase: show card description in floating window
    user login via google etc.
    save history of user's readings to DB
CODE
    rename imgUrl to path
    rename handleDeckClick to handleClickDeck
    extract Board from App?
    make row style independent of card height by moving card-related styles
        from row to board e.g. min-height
    move cards urls to their own module?
STYLE
    make card flip more realistic/snappy
    note how the cards on on the board descend smoothly. There's something wrong
    with my top card animation that makes it jerky.
    API with useEffect to retreive
    fix jank when hovering top card from below
    don't hover top card if max card already drawn
    center drawn cards
    shadow effect on hovered card
    prevent cards from shrinking to fit screen; have them be static sized based on scren width
    idea: instead of rendering div onClick, have the card divs already spaced out and insert a card
    prompt "click the deck to draw a card."
    remove white area from aroun cards (check Luke smith video)
    get/make better card assets (midJourney?)
    apply card border style (white border with rounded edges)
    make all cards are the same height and width
