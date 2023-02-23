import React from "react";

export const Card = (props) => {
    return <div className="card-name">
        Ini adalah Kartu Nama
        <br/>
        Nama saya adalah: {props.nama}
        <br/>
        Pekerjaan: {props.pekerjaan}
    </div>
}