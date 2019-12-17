// Portfolio section start
var pItems = document.getElementById("portfolioItems");
var mItems = document.getElementById("portfolioModals");
var portfolioItems = [];
var modalItems = [];
var items = [
    {
        name: 'Pozole',
        type: 'Caldo',
        origin: 'México',
        ingredients: 'Granos de maíz y carne',
        desc: 'El pozole (del náhuatl pozolli, de tlapozonalli, «hervido» o «espumoso»,​ o del cahíta posoli, «cocer maíz») es un plato tradicional mesoamericano, un caldo hecho a base de granos de maíz de un tipo conocido comúnmente como cacahuazintle, a la que se agrega, según la región, carne de pollo o de cerdo como ingrediente secundario.1​ De esta preparación básica existen variaciones por todo el territorio mexicano y algunas cocinas de América Central. Por ejemplo, en México el pozole verde es del estado de Guerrero y el rojo de Sonora, Sinaloa, Nayarit, Guanajuato, Jalisco y Tlaxcala.2 A este versátil platillo se le puede acompañar con diversos ingredientes, que varían según la zona y costumbres. En América del Sur existe un plato con el cual guarda parecido, llamado patasca.'
    },{
        name: 'Tacos',
        type: 'Garnacha - Comida rápida',
        origin: 'México',
        ingredients: 'Tortilla de maíz y carne',
        desc: 'Un taco es una preparación mexicana que en su forma estándar consiste en una tortilla enrollada (generalmente de maíz, también de harina de trigo, de nopal o de algún otro ingrediente) que contiene algún alimento encima y algún tipo de salsa. Es considerado como uno de los platillos más representativos de la comida mexicana.'
    },{
        name: 'Chile en nogada',
        type: 'Gurmet',
        origin: 'México - Puebla',
        ingredients: 'Chile poblano, guiso y granada roja',
        desc: 'El chile en nogada (más comúnmente chiles en nogada, en plural, a pesar de que no suele servirse más que un único chile) es uno de los platillos típicos de la gastronomía del estado de Puebla. Ha sido llamado el "platillo poblano por excelencia".1​ Se prepara con chile poblano relleno de un guisado de picadillo y frutas, que incluye acitrón y que se cubre con salsa de nuez (nogada), perejil y granada. Los colores del chile poblano, de la crema y de la granada simboliza los de la bandera de México.'
    },{
        name: 'Guacamole',
        type: 'Salsa',
        origin: 'México',
        ingredients: 'Aguacate, sal, limon, queso(opcional), verdura variada(opcional)',
        desc: 'El guacamole o guacamol es una salsa mexicana preparada a base de aguacate o palta y chile verde.[cita requerida] El nombre guacamole proviene del náhuatl Ahuacamolli traducido al español, que se compone de las palabras Ahuacatl (aguacate) + molli (mole o salsa). El aguacate tenía una significación erótica para los aztecas, tanto que las mujeres no podían realizar la recolección de los frutos,[cita requerida] ya que simbolizaban los testículos.1​2​ Según la mitología prehispánica, Quetzalcoatl, el dios tolteca, ofreció la receta del guacamole a su pueblo, quienes la extendieron por el territorio de Mesoamérica.'
    },{
        name: 'Enchilada',
        type: 'Comida corrida',
        origin: 'México',
        ingredients: 'Tortilla de maíz, pollo, verdura variada',
        desc: 'La enchilada es un plato que en México se elabora con tortilla de maíz bañada en alguna salsa picante utilizando chile en su preparación. Dependiendo del estilo, la enchilada puede ir acompañada o rellena de carnes —pollo,pavo,res— o queso; además de ser acompañada de alguna guarnición adicional, que generalmente consiste en cebolla fresca picada o en rodajas, lechuga, crema de leche y queso.'
    },{
        name: 'Sopes',
        type: 'Antojito',
        origin: 'México',
        ingredients: 'Granos de maíz y carne',
        desc: 'Los sopes, pellizcadas, picadas o picaditas son una comida mexicana, consistente de una Tortilla de maíz gruesa, originalmente frita con manteca, sobre la que se añaden diferentes ingredientes, como chicharrón o carne, además de queso, verduras y salsa picante, con variaciones regionales.'
    }

];

for(var i = 0; i < items.length; i++){
    portfolioItems.push(`
         <div class="col-md-6 col-lg-4">
            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#modal${i+1}">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="portfolio-item-caption-content text-center text-white">
                        <i class="fas fa-plus fa-3x"></i>
                    </div>
                </div>
                <img id="portfolio" class="img-fluid rounded-lg" src="img/portfolio/${items[i].name.toLocaleLowerCase()}.jpg" alt="${items[i].name}">
            </div>
        </div>
`);
    modalItems.push(
        `
        <div class="portfolio-modal modal fade" id="modal${i+1}" tabindex="-1" role="dialog" aria-labelledby="portfolioModal${i+1}Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i class="fas fa-times"></i>
              </span>
            </button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <!-- Portfolio Modal - Title -->
                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">${items[i].name}</h2>
                    <!-- Icon Divider -->
                    <div class="divider-custom">
                      
                      <div class="divider-custom-icon">
                        <i class="fas fa-utensils"></i>
                      </div>
                      
                    </div>
                    <!-- Portfolio Modal - Image -->
                    <img class="img-fluid rounded mb-5" src="img/portfolio/${items[i].name.toLocaleLowerCase()}.jpg" alt="">
                    <!-- Portfolio Modal - Text -->
                    <p class="mb-5 text-justify">Tipo: ${items[i].type}</p>
                    <p class="mb-5 text-justify">${items[i].desc}</p>
                    <button class="btn btn-primary" href="#" data-dismiss="modal">
                      <i class="fas fa-times fa-fw"></i>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        `
    );
}
pItems.innerHTML = portfolioItems.join('');
mItems.innerHTML = modalItems.join('');

// Portfolio section end