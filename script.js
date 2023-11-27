// alert("helló")
const config=[
    {key:"id", text:"#", type:"plain"},
    {key:"tipus", text:"Típus", type:"select", 
    options:[
        {value:1, text:"Ford"},
        {value:2, text:"Renault"},
        {value:3, text:"Trabant"},        
    ]},
    {key:"ar", text:"Ár", type:"number"},
    {key:"szin", text:"Szín", type:"text"},
]


var adatok=[
    {id:1, tipus:1, ar:3000000, szin:"fehér"},
    {id:2, tipus:2, ar:2000000, szin:"fekete"},
    {id:3, tipus:3, ar:1000000, szin:"sárga"},
    {id:3, tipus:1, ar:3000000, szin:"piros"},
]

function fejlecRajzol(){
    sor=document.createElement('div')
    sor.className='row'
    sor.classList.add('fw-bold')
    sor.classList.add('my-3')

    config.forEach(
        function(oszlop){
        o=document.createElement('div') 
        o.className="col"
        o.innerHTML= oszlop.text 
        sor.appendChild(o)
        }
    )
    document.getElementsByClassName('container')[0].appendChild(sor)
}

function adatokatMegjelenit(){   
    adatok.forEach(
        (auto)=>{
            sor=document.createElement('div')
            sor.className='row'
            sor.classList.add('my-1')

            config.forEach(
                function(oszlop){
                o=document.createElement('div') 
                o.className="col"
                o.innerHTML= auto[oszlop.key] 
                sor.appendChild(o)
                }
            )
            document.getElementsByClassName('container')[0].appendChild(sor)
        }
    )

}

function render(){
    fejlecRajzol()
    adatokatMegjelenit()
}

render()