import React, { createRef, useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "@mui/material";
import { context } from "../App";
import { Modaloptions } from "../Component/OptionFiel";
import { MyDropdown } from "./MyDropdown";
import SearchableDropdown from "./SearchableDropdown";
import CheckboxTable from "./CheckBoxTable";
import GeneralTable from "./GeneralTable";

function PopModal(props) {
  const data = useContext(context);

  const [modal, setModal] = useState(null);
  const [make, setMake] = useState(null);
  const [year, setYear] = useState(null);
  const [preview, setPreview] = useState(false);
  const [tabledata, setTableData] = useState([]);
  const [checked, setChecked] = useState([]);
  const [Tileoptions, setTileoptions] = useState([]);
  const [Yearoptions, setYearoptions] = useState([]);

  async function FetchModel() {
    const urlParams = new URLSearchParams();
    urlParams.append("Make", `${make.value}`);
    const response = await fetch(
      `https://vignesh-node-for-ui.onrender.com/Model?${urlParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const responseData = await response.json();
    let result = [];
    for (var i in responseData) {
      result.push({
        value: responseData[i]["Model"],
        label: responseData[i]["Model"],
      });
    }
    setTileoptions(result);
  }

  async function FetchYear() {
    const urlParams = new URLSearchParams();
    urlParams.append("Make", `${make.value}`);
    urlParams.append("Model", `${modal.value}`);
    const response = await fetch(
      `https://vignesh-node-for-ui.onrender.com/Year?${urlParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const responseData = await response.json();
    let result = [];
    for (var i in responseData) {
      result.push({
        value: responseData[i]["Year"],
        label: responseData[i]["Year"],
      });
    }
    setYearoptions(result);
  }

  async function FetchTableData() {
    const urlParams = new URLSearchParams();
    urlParams.append("Make", `${make.value}`);
    urlParams.append("Model", `${modal.value}`);
    urlParams.append("Year", `${year.value}`);
    const response = await fetch(
      `https://vignesh-node-for-ui.onrender.com/Filtered?${urlParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const responseData = await response.json();
    let result = [];
    for (var i in responseData) {
      result.push(responseData[i]);
    }
    setTableData(result);
  }

   async function SaveButton() {
    const response = await fetch(
        `https://vignesh-node-for-ui.onrender.com/UpdateCars`,
        {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(checked)
        }
      );
      if (response.ok) window.location.reload()
   }

  useEffect(() => {
    FetchModel();
  }, [make]);
  useEffect(() => {
    FetchYear();
  }, [modal]);
  useEffect(() => {
    FetchTableData();
  }, [year]);

  return (
    <>
      {!preview && (
        <div>
          <div id="header-DropPlace" style={{ display: "flex", width: "100%" }}>
            <SearchableDropdown
              options={Modaloptions}
              name={"Make"}
              disabled={year == null ? false : true}
              setValue={(e) => setMake(e)}
              value={make}
            />
            <SearchableDropdown
              options={Tileoptions}
              name={"Model"}
              disabled={year == null && make != null ? false : true}
              setValue={(e) => setModal(e)}
              value={modal}
            />
            <SearchableDropdown
              options={Yearoptions}
              name={"Year"}
              disabled={make != null && modal != null ? false : true}
              setValue={(e) => setYear(e)}
              value={year}
            />
            <Button
              style={{ height: "2rem", marginTop: "1.8rem" }}
              variant="outlined"
              disabled={checked.length > 0 ? false : true}
              color="info"
              onClick={() => {
                setPreview(true);
              }}
            >
              Preview
            </Button>
          </div>
          {tabledata && (
            <div id="table" style={{ maxHeight: "30rem", overflowY: "scroll" }}>
              <CheckboxTable
                checked={checked}
                setChecked={(s) => setChecked(s)}
                rows={tabledata}
              />
            </div>
          )}
        </div>
      )}
      {preview && <>
        <div>
            <div><h3>Choosen Cars</h3></div>
            <div style={{overflowY: "auto", maxHeight:"25rem"}}>
            <GeneralTable data={data} selected={checked}/>
            </div>
            <div style={{margin: "2rem"}}>
                <Button variant="contained" color="success" onClick={async() => {
                    await SaveButton()
                }}>Save</Button>
            </div>
        </div>
      </>}
    </>
  );
}

export default PopModal;
