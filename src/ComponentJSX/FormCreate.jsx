import React, { Component } from "react";

class FormCreate extends Component {
  state = {
    name: "",
    type: "text",
    checked: false,
    countColumn: 0,
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    event.preventDefault();
  };

  createTableName = () => {
    
    const tr = document.getElementById("tr");
    const th = document.createElement("th");
    th.setAttribute("id", "th");
    th.setAttribute("data-type", this.state.type);
    tr.appendChild(th);
    const name = document.createTextNode(this.state.name);
    th.appendChild(name);

  


    // const tbody = document.getElementById('tbody')
    // const tr1 = document.createElement('tr')
    // tbody.appendChild(tr1)
    // const td = document.createElement('td')
    // tr1.appendChild(td)
    // const input = document.createElement('input')
    // td.appendChild(input)
    // input.setAttribute('type', this.state.type)

    

    if (this.state.checked) {
      th.setAttribute("class", "red");
    }

    this.setState({
      countColumn: document.getElementById("tr").getElementsByTagName("th")
        .length,
    });
  };

  

  addTenAutoColumn = (event) => {
    const tbody = document.getElementById("tbody");
    for (let n = 0; n < 10; n++) {
      const tr = document.createElement("tr");
      tbody.appendChild(tr);

      for (let i = 0; i < this.state.countColumn; i++) {
        const td = document.createElement("td");
        tr.appendChild(td);

        const input = document.createElement("input");
        input.setAttribute("type", this.state.type);
        

        td.appendChild(input);
      }
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            <input
              id="checkBox"
              type="checkbox"
              name="checked"
              checked={this.state.checked}
              onChange={this.handleInputChange}
            />{" "}
            Important?
          </label>
          <input
            name="name"
            type="text"
            onChange={this.handleInputChange}
            placeholder="pleace write header-name"
            value={this.state.name}
          ></input>
          <select
            onChange={this.handleInputChange}
            id="selectType"
            type="select"
            name="type"
            value={this.state.type}
          >
            <option selected value="not">
              Type not select
            </option>
            <option value="Date">Date</option>
            <option value="Text">Text</option>
            <option value="Number">Number</option>
          </select>
          <button
            type="button"
            className="button"
            onClick={this.createTableName}
          >
            Create Collumn
          </button>
        </form>

        <table id="table">
          <thead>
            <tr id="tr"></tr>
          </thead>
          <tbody id="tbody"></tbody>
        </table>
        <button
          type="button"
          onClick={this.addTenAutoColumn}
          className="button"
        >
          Add 10 Coll
        </button>
      </div>
    );
  }
}

export default FormCreate;
