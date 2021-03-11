import React from 'react';
import Select from 'react-select';

const tickersAPI = [
    {
      "__class__": "Company", 
      "created_at": "2021-03-03T22:17:59.000000", 
      "id": "00094401-7e7d-47b0-964d-e2f5507b0de3", 
      "name": "Celanese Corporation Celanese Corporation Common Stock", 
      "ticker": "CE", 
      "updated_at": "2021-03-03T22:17:59.000000"
    }, 
    {
      "__class__": "Company", 
      "created_at": "2021-03-03T22:19:00.000000", 
      "id": "000e0831-190b-4d1a-95a2-b32c1dcc9ab1", 
      "name": "UGI Corporation Common Stock", 
      "ticker": "UGI", 
      "updated_at": "2021-03-03T22:19:00.000000"
    }, 
    {
      "__class__": "Company", 
      "created_at": "2021-03-03T22:19:02.000000", 
      "id": "001ddd74-f3e6-46c9-a74f-988520cc4fc4", 
      "name": "Meridian Bioscience Inc. - Common Stock", 
      "ticker": "VIVO", 
      "updated_at": "2021-03-03T22:19:02.000000"
    }, 
    {
      "__class__": "Company", 
      "created_at": "2021-03-03T22:18:52.000000", 
      "id": "0023c1a2-51c3-459e-9735-6c2e4e458684", 
      "name": "Sundance Energy Inc.  - Common Stock", 
      "ticker": "SNDE", 
      "updated_at": "2021-03-03T22:18:52.000000"
    }, 
    {
      "__class__": "Company", 
      "created_at": "2021-03-03T22:18:05.000000", 
      "id": "0026c3a5-3c51-4b38-ae29-b4356cb4e37d", 
      "name": "SPDR Dow Jones Industrial Average ETF", 
      "ticker": "DIA", 
      "updated_at": "2021-03-03T22:18:05.000000"
    }, 
    {
      "__class__": "Company", 
      "created_at": "2021-03-03T22:18:36.000000", 
      "id": "00366d01-8d41-45c8-9767-8a924454abec", 
      "name": "Northfield Bancorp, Inc. - Common Stock", 
      "ticker": "NFBK", 
      "updated_at": "2021-03-03T22:18:36.000000"
    }, 
    {
      "__class__": "Company", 
      "created_at": "2021-03-03T22:18:45.000000", 
      "id": "003b2031-6dbb-4a8e-bf60-9668faf5af1c", 
      "name": "Invesco Dynamic Networking ETF", 
      "ticker": "PXQ", 
      "updated_at": "2021-03-03T22:18:45.000000"
    }
];

function truncate(str) {
  return str.length > 10 ? str.substring(0, 20) + "..." : str;
}

const tickers = tickersAPI.map(opt => ({ label: truncate(opt.name), value: opt.ticker }));

function SearchBar() {

  return (
    <div className="w-full">
      <Select options={tickers}  onChange={opt => (this.sendData(opt.value))} onChange={opt => (console.log(opt.value))}/>
    </div>
  );
}

export default SearchBar;