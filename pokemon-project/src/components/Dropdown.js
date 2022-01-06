const Dropdown = (props) => {
  //ChangeDisplay is the function that changes which pokemon cards are displayed via user input.
  const { changeDisplay } = props;

  //This component is the  Dropdown menu for display options.
  //There are different buttons the user can click to only display pokemon of a certain category, such as type, height and weight.

  //Will map over this to return one button for each type. Cleaner and dryer than hard-coding 15 different buttons.
  const typesArray = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
  ];
  return (
    <section className="dropdown">
      {/* Hovering here shows the dropdown menu with display options */}
      <button className="dropbtn" data-testid="dropbtn">
        Display Options (check this out!)
      </button>

      <div className="dropdown-content">
        {/* Begin mapping over types. There are 15 pokemon types so I didn't want to code a button for every one of them. */}
        <div>
          <h5
            className="dropdown-display-title"
            data-testid="dropdown-display-title"
          >
            Pick a type:
          </h5>
          {typesArray.map((item) => {
            return (
              <button
                className="dropbtn-inner"
                data-testid="dropbtn-inner"
                id={`${item.toLowerCase()}-btn`}
                key={item}
                onClick={() => {
                  changeDisplay(item);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
        {/* End mapping over types */}

        {/* Now there are four different buttons (sorting by tall, short, heavyweight and lightweight) that were easier to just hard code. */}

        {/* Begin sorting pokemon by weight */}
        {/* Show only small pokemon (<10kg) */}
        <div>
          <h5 className="dropdown-display-title">Pick a weight:</h5>
          <button
            className="dropbtn-inner"
            data-testid="dropbtn-inner"
            id="small-btn"
            onClick={() => {
              changeDisplay(null, "small");
            }}
          >
            Small
          </button>

          {/* Show only big pokemon (>100kg) */}
          <button
            className="dropbtn-inner"
            data-testid="dropbtn-inner"
            id="big-btn"
            onClick={() => {
              changeDisplay(null, "big");
            }}
          >
            Big
          </button>
        </div>
        {/* End sorting pokemon by weight */}

        {/* Begin sorting pokemon by height */}
        <div>
          <h5 className="dropdown-display-title">Pick a height:</h5>

          {/* Show only short pokemon */}
          <button
            className="dropbtn-inner"
            data-testid="dropbtn-inner"
            id="short-btn"
            onClick={() => {
              changeDisplay(null, null, "short");
            }}
          >
            Short
          </button>

          {/* Show only tall pokemon */}
          <button
            className="dropbtn-inner"
            data-testid="dropbtn-inner"
            id="tall-btn"
            onClick={() => {
              changeDisplay(null, null, "tall");
            }}
          >
            Tall
          </button>
        </div>
        {/* End sorting pokemon by height */}
      </div>

      {/* End of pokemon sorting buttons */}
    </section>
  );
};

export default Dropdown;
