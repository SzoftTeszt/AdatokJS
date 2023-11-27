// alert("helló")
const config=[
    {key:"id", text:"#", type:"plain"},
    {key:"tipus", text:"Típus", type:"select", 
    options:[
        {value:1, text:"Ford"},
        {value:2, text:"Renault"},
        {value:3, text:"Trabant"},        
        {value:4, text:"Volvo"},        
    ]},
    {key:"ar", text:"Ár", type:"number"},
    {key:"szin", text:"Szín", type:"text"},
    {key:"ev", text:"Évjárat", type:"number"},
]


var adatok=[
    {id:1, tipus:1, ar:3000000, szin:"fehér", ev:2000},
    {id:2, tipus:2, ar:2000000, szin:"fekete", ev:2010},
    {id:3, tipus:3, ar:1000000, szin:"sárga", ev:2020},
    {id:4, tipus:1, ar:3000000, szin:"piros", ev:2023},
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
    o=document.createElement('div')         
    o.className="col"
    o.innerHTML= "Műveletek" 
    sor.appendChild(o)

    document.getElementsByClassName('container')[0].appendChild(sor)
}

function adatokatMegjelenit(){   
    document.getElementsByClassName('container')[0].innerHTML=""
    adatok.forEach(
        (auto)=>{
            sor=document.createElement('div')
            sor.className='row'
            sor.classList.add('my-2')

            


            config.forEach(
                function(oszlop){
                o=document.createElement('div') 
                o.className="col"
                switch (oszlop.type){
                case 'plain':
                    o.innerHTML= auto[oszlop.key]
                    break

                case 'select':
                    sel=document.createElement('select')  
                    sel.name=oszlop.key+auto.id
                    sel.className="form-select"
                    oszlop.options.forEach(
                        (opcio)=>{
                            opt=document.createElement('option')  
                            opt.innerHTML=opcio.text
                            opt.value=opcio.value
                            opt.selected= (opcio.value==auto[oszlop.key])
                            sel.appendChild(opt)
                        }
                    )    
                    o.appendChild(sel)
                    break

                default:
                    //  o.innerHTML=`<input 
                    //                 class="form-control" 
                    //                 type="${oszlop.type}" 
                    //                 value="${auto[oszlop.key]}">`

                    i=document.createElement('input')
                    i.name=oszlop.key+auto.id
                    i.type=oszlop.type
                    i.value=auto[oszlop.key]
                    i.className="form-control"
                    o.appendChild(i)

                    // o.innerHTML='<input type="'+oszlop.type+'">' 
                }



                sor.appendChild(o)
                }
            )
            o=document.createElement('div')         
            o.className="col"

                saveBtn= document.createElement('button')    
                saveBtn.className="btn btn-primary"
                saveBtn.innerHTML="Save"
                saveBtn.dataset.id=auto.id
                saveBtn.onclick=mentes
                o.appendChild(saveBtn)

                delBtn= document.createElement('button')    
                delBtn.className="btn btn-primary ms-2"
                delBtn.innerHTML="Delete"
                delBtn.dataset.id=auto.id
                delBtn.addEventListener("click",torles)
                o.appendChild(delBtn)

            sor.appendChild(o)
            
           
            document.getElementsByClassName('container')[0].appendChild(sor)
        }    )}


function mentes(id){
    console.log("Ment", this.dataset.id)
    szin=document.querySelector('*[name=szin'+this.dataset.id+']')
    tipus=document.querySelector('*[name=tipus'+this.dataset.id+']')
    console.log("*[name='szin"+this.dataset.id+"']",szin.value)
    console.log("*[name='tipus"+this.dataset.id+"']",tipus)
}        
function torles(){
    //splice, slice
    adatok=adatok.filter(
        (a)=>{return a.id != this.dataset.id}
    )
    render()    
}        

function render(){
    fejlecRajzol()
    adatokatMegjelenit()
}

render()