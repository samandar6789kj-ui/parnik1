import { component$, useStylesScoped$ } from '@builder.io/qwik';

export default component$(() => {
  useStylesScoped$(`
    .solutions-section {
      padding: 100px 8%;
      background: #0a0c10;
    }

    .header-group {
      margin-bottom: 60px;
    }

    .solutions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
    }

    /* Yechim Kartasi */
    .solution-card {
      background: linear-gradient(145deg, #11141b, #0d0f14);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 24px;
      padding: 40px;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }

    .solution-card:hover {
      transform: translateY(-10px);
      border-color: #22c55e;
      box-shadow: 0 20px 40px rgba(34, 197, 94, 0.1);
    }

    .solution-card h3 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      color: #ffffff;
    }

    /* Ro'yxat uslubi */
    .feature-list {
      list-style: none;
      padding: 0;
    }

    .feature-list li {
      margin-bottom: 12px;
      color: #94a3b8;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .feature-list li::before {
      content: '✓';
      color: #22c55e;
      font-weight: bold;
    }

    .tag {
      display: inline-block;
      padding: 5px 15px;
      border-radius: 50px;
      background: rgba(34, 197, 94, 0.1);
      color: #22c55e;
      font-size: 0.8rem;
      margin-bottom: 15px;
      font-weight: 600;
    }

    .card-footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.05);
    }
  `);

  return (
    <section id="yechimlar" class="solutions-section">
      <div class="header-group">
        <span style={{ color: '#ff5f1f', fontWeight: 'bold', letterSpacing: '2px' }}>KOMPLEKS YECHIMLAR</span>
        <h2 style={{ fontSize: '3rem', marginTop: '10px' }}>Biznesingiz uchun <br/> professional tizimlar</h2>
      </div>

      <div class="solutions-grid">
        {/* Yechim 1 */}
        <div class="solution-card">
          <div class="tag">AVTOMATIZATSIYA</div>
          <h3>Aqlli Iqlim Nazorati</h3>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>
            Inson omilisiz harorat, namlik va CO2 darajasini 24/7 boshqarish tizimi.
          </p>
          
          <ul class="feature-list">
            <li>Mobil ilova orqali boshqaruv</li>
            <li>Avtomatik shamollatish tizimi</li>
            <li>Issiqlikni saqlash ekranlari</li>
          </ul>
          <div class="card-footer">
            <button style={{ background: 'none', border: '1px solid #22c55e', color: '#22c55e', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>Batafsil</button>
          </div>
        </div>

        {/* Yechim 2 */}
        <div class="solution-card">
          <div class="tag">GIDROPONIKA</div>
          <h3>NFT va Substrat Tizimlari</h3>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>
            Tuproqsiz muhitda maksimal hosil olish uchun mo'ljallangan gidroponik yechimlar.
          </p>
          
          <ul class="feature-list">
            <li>Suvni 90% gacha tejash</li>
            <li>Kasalliklar xavfi minimal</li>
            <li>Tezlashtirilgan o'sish sikli</li>
          </ul>
          <div class="card-footer">
            <button style={{ background: 'none', border: '1px solid #22c55e', color: '#22c55e', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>Batafsil</button>
          </div>
        </div>

        {/* Yechim 3 */}
        <div class="solution-card">
          <div class="tag">ENERGETIKA</div>
          <h3>Energiya Tejamkor Isitish</h3>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>
            Qishki mavsumda xarajatlarni kamaytiruvchi innovatsion isitish va quyosh panellari.
          </p>
          <ul class="feature-list">
            <li>Geotermal isitish imkoniyati</li>
            <li>Kombinatsiyalashgan qozonxonalar</li>
            <li>Avtonom elektr ta'minoti</li>
          </ul>
          <div class="card-footer">
            <button style={{ background: 'none', border: '1px solid #22c55e', color: '#22c55e', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>Batafsil</button>
          </div>
        </div>
      </div>
    </section>
  );
});