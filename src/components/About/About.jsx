import React from 'react';
import './About.css';
import sample from '../../assets/sample.png';
import signature from '../../assets/signature.png';

class About extends React.Component {
  render(){
    return(
      <div class="fab-about">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2>About Me</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <img src={sample} class="img-fluid"alt="Faviola"/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
            <span class="sec-header">Fabstargraphy</span>
              <section>
                <h3>Faviola Caballero</h3>
                  <p>quo. Solum putant luptatum an vel. Eu ignota dignissim
                      interpretaris pri, id vel habeo causae. Probatus corrumpit
                      ius ei. Habeo debet ad sed, erat doctus saperet in eum.
                      Ne elit magna illud ius. Et per quot clita, pri te tation
                      reformidans. Vel in soleat volutpat, ut veniam labitur
                      incorrupte mel. Wisi recusabo eu sit.
                      At fugit noluisse mea, an qui explicari neglegentur.
                      Habemus antiopam eum ex, vix eu everti dolorem graecis.
                      Eu denique aliquando theophrastus has, duo no omnium
                      contentiones, aperiam ocurreret in nam. Feugiat propriae
                      in ius.
                  </p>
                  <p>Ad nam putant appetere luptatum, eos no menandri
                      reprehendunt.Mei ne equidem epicurei. Cu doctus sapientem
                      vix, duo ei augue graece numquam, has ornatus incorrupte
                      no. Case evertitur ex mea. At movet cotidieque vim, ex
                      lorem nonumy facilisis cum. Ei novum errem exerci pro.
                      Ex decore reformidans mei, at nam error oblique. Enim
                      invenire prodesset nec an, dicant scripta sea ea. Ne nam
                      quas posse postulant, facete sanctus luptatum in mel.
                      At mea propriae gloriatur voluptatum, duo augue conceptam
                      dissentiunt at.
                  </p>
                  <p>
                  <img class="signature" src={signature} alt="Faviola signature"/>
                  </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
