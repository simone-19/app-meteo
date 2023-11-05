const Imgfissa = () => {
  return (
    <>
      <img
        src="https://www.veneto.info/wp-content/uploads/sites/114/previsioni-meteo-hd.jpg"
        alt="meteo"
        className="w-100"
      />
      <div className=" d-flex flex-column mt-3">
        <div className="parag d-flex flex-column m-3 p-2">
          <h3>Caratteristiche dei Venti</h3>
          <p>
            I venti sono caratterizzati dalla direzione (influenzata dalla forza
            deviatrice dovuta alla rotazione terrestre, dalle irregolarità del
            suolo e dall’attrito) e dall’intensità (corrispondente alle
            velocità, proporzionale al gradiente di pressione e influenzata
            anche da latitudine, altezza sul mare e natura del suolo). I venti
            si classificano in tre categorie: venti costanti, periodici e
            variabili2.
          </p>
        </div>
        <div className="parag d-flex flex-column  m-3 p-2">
          <h3>Caratteristiche dei Pollini</h3>
          <p>
            Il monitoraggio pluriennale dei pollini consente di mettere in
            evidenza la situazione dei pollini: stagioni polliniche precoci o
            tardive, più intense o più deboli oppure la presenza di nuove specie
            polliniche allergeniche, come ad esempio l’ambrosia.
          </p>
        </div>
      </div>
    </>
  );
};
export default Imgfissa;
