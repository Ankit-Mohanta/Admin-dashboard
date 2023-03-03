//temporary data

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {field:'user', headerName:'user', width:230, renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img src={params.row.img} alt="avatar" className="cellImg"/>
                {params.row.username}
            </div>
        )
    }},
    {field:"email", headerName:"Email", width:230, },
    {field:"age", headerName:"Age", width:100, },
    {field:"status", headerName:"Status", width:160, renderCell:(params)=>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        )
    }},
]


export const userRows = [
    {
        id:1,
        username:"Snow",
        img:"https://pixabay.com/photos/fantasy-girl-sexy-woman-female-4257947/",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
    },
    {
        id:2,
        username:"Jamie Lanister",
        img:"",
        status:"passive",
        email:"2snow@gmail.com",
        age:42,
    },
    {
        id:3,
        username:"Lanister",
        img:"",
        status:"pending",
        email:"3snow@gmail.com",
        age:53,
    },
]