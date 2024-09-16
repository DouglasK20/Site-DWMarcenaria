import Image from "next/image";
import banner from "@/../public/banner.jpg";
import cozinha from "@/../public/cozinha.jpg";
import projetoUm from "@/../public/image1.png";
import projetoDois from "@/../public/image2.png";
import projetoTres from "@/../public/image3.png";
import projetoQuatro from "@/../public/image4.png";
import servicoUm from "@/../public/servico1.jpg";
import servicoDois from "@/../public/servico2.jpg";
import servicoTres from "@/../public/servico3.jpg";

export default function Home() {
  return (
    <main>
      {/* Home */}
      <section id="home" className="relative w-full h-screen bg-gray-800">
        <div className="absolute inset-0">
          <Image
            src={banner}
            alt="Banner do site"
            objectFit="cover"
            quality={100}
            fill
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-3xl mx-auto px-4 py-8 bg-black bg-opacity-50 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 shadow-md">
              Bem-vindo à DWMarcenaria
            </h1>
            <p className="text-lg md:text-xl shadow-md">
              Especializados em criar peças únicas e personalizadas de
              marcenaria, com atenção aos detalhes e acabamento de alta
              qualidade. Transformamos suas ideias em realidade, oferecendo
              soluções que combinam beleza e funcionalidade.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-16 bg-gray-300">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center">
            {/* Imagem */}
            <div className="flex-1 mb-8 md:mb-0 md:mr-8">
              <Image
                src={cozinha}
                alt="Imagem Sobre"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Texto */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Sobre a DWMarcenaria</h2>
              <p className="text-lg mb-4">
                Na DWMarcenaria, nossa paixão pela marcenaria se reflete em cada
                peça que criamos. Com anos de experiência e um compromisso com a
                qualidade, transformamos madeira em obras de arte funcionais e
                elegantes. Cada projeto é uma combinação única de habilidade
                artesanal e design inovador, oferecendo a você produtos que são
                tão duráveis quanto belos.
              </p>
              <p className="text-lg">
                Desde móveis personalizados até acabamentos de interiores, nossa
                missão é exceder suas expectativas e trazer seu sonho à vida.
                Explore nossas criações e descubra como podemos transformar seu
                espaço com nosso trabalho de marcenaria de alta qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Projetos */}
      <section id="galeria" className="py-12 bg-gray-100">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Galeria de Projetos
          </h2>
          <p className="text-center text-lg mb-8">
            Explore nossos trabalhos em marcenaria e conheça nosso estilo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white shadow-sm hover:shadow-2xl rounded-lg transition-shadow duration-300">
              <Image
                src={projetoUm}
                alt="Primeira Imagem"
                className="w-full sm:h-80 h-auto object-cover rounded-lg"
              />
            </div>
            <div className="bg-white shadow-sm hover:shadow-2xl rounded-lg transition-shadow duration-300">
              <Image
                src={projetoDois}
                alt="Segunda Imagem"
                className="w-full sm:h-80 h-auto object-cover rounded-lg"
              />
            </div>
            <div className="bg-white shadow-sm hover:shadow-2xl rounded-lg transition-shadow duration-300">
              <Image
                src={projetoTres}
                alt="Terceira Imagem"
                className="w-full sm:h-80 h-auto object-cover rounded-lg"
              />
            </div>
            <div className="bg-white shadow-sm hover:shadow-2xl rounded-lg transition-shadow duration-300">
              <Image
                src={projetoQuatro}
                alt="Quarta Imagem"
                className="w-full sm:h-80 h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section id="servicos" className="py-12 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Nossos Serviços
          </h2>
          <p className="text-center text-lg mb-12">
            Oferecemos soluções personalizadas em marcenaria, destacando a
            qualidade e o cuidado em cada projeto.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-100 p-4 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={servicoUm}
                alt="Móveis Sob Medida"
                className="w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Móveis Sob Medida</h3>
              <p className="text-gray-600">
                Criamos móveis sob medida que atendem às suas necessidades e se
                encaixam perfeitamente no seu espaço.
              </p>
            </div>
            <div className="bg-gray-100 p-4 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={servicoDois}
                alt="Móveis Sob Medida"
                className="w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Reformas e Restaurações
              </h3>
              <p className="text-gray-600">
                Realizamos reformas e restaurações de móveis, trazendo nova vida
                e estilo ao seu ambiente.
              </p>
            </div>
            <div className="bg-gray-100 p-4 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={servicoTres}
                alt="Móveis Sob Medida"
                className="w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Atendimento Especializado
              </h3>
              <p className="text-gray-600">
                Consultoria personalizada para garantir que cada projeto atenda
                às suas expectativas e necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
