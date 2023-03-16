import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="links">
          <div className="links1">
            <span>&#174;2020 </span>
            Finddeveloper.net
          </div>
          <div className="links2">
            <ul>
              <li><a href="#">Gizlilik Merkezi</a></li>
              <li><a href="#">Çerezler</a></li>
              <li><a href="#">Gizlilik</a></li>
              <li><a href="#">Şartlar</a></li>
            </ul>
            <ul>
              <li><a href="#">Finddeveloper'da Çalışmak</a></li>
              <li><a href="#">Hakkımızda</a></li>
              <li><a href="#">Yardım Merkezi</a></li>
            </ul>
          </div>
          <div className="links3">
            <select>
              <option>Türkçe</option>
              <option>English</option>
            </select>
          </div>
        </div>
        <div className="informing">
          <Image
            src="/images/iskur.png"
            alt="iskur_logo"
            width={80}
            height={80}
          />
          <div className="text">
            Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak 31/08/2018-30/08/2021 tarihleri arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124 sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için ilgili telefon numaralarına başvurabilirsiniz.
            <span> <a href="#">Diğer iller için tıklayınız.</a></span>
          </div>
          <div className="contacts">
            <p><strong>Türkiye İş Kurumu İstanbul İl Müdürlüğü: </strong>0212 555 55 55</p>
            <p><strong>Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi: </strong>0216 523 90 26</p>
          </div>
        </div>
      </div>
    </footer>
  )
}