import React from 'react';
import CarouselComponenet from './carouselComponent';
class GenericComponent extends React.Component {

        render() {
            return (
                <div>
                    <section className="background_section">
                    <header>
                        <h1>מה אנחנו</h1>
                        </header>
                        <h2>
                            עיצוב בהתאמה אישית יבדיל אותך ממתחריך ממשק משתמש מעולה יוביל ליותר פניות מהאתר ליווי מקצועי יוביל את העסק שלך לתוצאות הראשונות בגוגל!
                            בניית אתר תדמיתי​ לחברה​,​ בניית אתר מסחר​,​ בניית אתר לעסקים​,​ אינטגרציה למערכות​,​ UX\ UI​,​ עיצוב וממשקי משתמש​,​ בניית פורטל.
                            ועם מינימום צוות שנצרך בשביל ביצוע, אז למה לך להיות השוקי של עולם בניית האתרים?
                         </h2>
                    </section>

                    <section>
                        <div className="inner">
                    <section className="columns double">
                        <div className="column shadowpadding radios50">
                                <h3 className="center">דפי נחיתה הופכים מבקרים ללקוחות!</h3>
                                <p>
                                אחד מהכלים העוצמתיים ביותר בעולם השיווק הדיגיטלי הוא דף הנחיתה, לכל עסק ניתן לבנות דף נחיתה איכותי שיודע להפוך מבקרים ללקוחות איכותיים. הצוות שלנו כבר בנה מעל 1000 דפי נחיתה שונים ללקוחות שלנו.
                                </p>
                        </div>
                             
                        <div className="column shadowpadding radios50">
                                <h3 className="center">פרסום גלובלי ובמספר שפות!</h3>
                                <p>
                                אחד היתרונות הגדולים שלנו הוא היכולת לעבוד במספר שפות ומספר מגזרים, אנחנו יודעים להתאים את הפרסום שלנו בצורה ממומקדת לשפה של הלקוח שלכם, כך למשל אם חשבתם לפרסם בשפה הרוסית ושפות נוספות, אנחנו כאן!                                </p>
                        </div>

                          <div className="column shadowpadding radios50">
                                <h3 className="center">עיצוב מרהיב ומיוחד !</h3>
                                <p>
                                בעיצוב אנחנו לא מתפשרים ומגייסים לשם כך את טובי המעצבים ומומחי הUI 
                                    !על מנת ליצור אתר יפה, חכם, מקורי שלא קיים אצל המתחרים
		                        ומקדם את צורכי העסק עם מינימום לחיצות וחיפושים!
                                 </p>
                        </div>

                           <div className="column shadowpadding radios50">
                                <h3 className="center">מחלקת תוכנה עוצמתית!</h3>
                                <p>
                                הצוות שלנו מונה מחלקת תוכנה עצמאית ובעזרתה אנחנו מפתחים כלים ייחודיים ללקוחות שלנו, היתרון שלנו כמשרד פרסום בעל מחלקת תוכנה הוא שאנחנו יכולים להתמודד עם כל אתגר בתחום הדיגיטל!
                                </p>
                        </div>
                    </section>
                    </div>
                    </section>

   <section className="background_section3">
                    <header>
                        <h1>המוצרים שלנו</h1>
                        </header>
                    </section>

                    <section>
                        <div className="inner">
                            <section className="columns tripple">
                                <CarouselComponenet></CarouselComponenet>
                            </section>
                            
                        </div>
                    </section>

                <section className="background_section2">
                    <header>
                        <h1>הצוות שלנו</h1>
                        </header>
                    </section>

                    <section>
                        <div className="inner">
                            <section className="columns double">
                                <div className="column">
                                    <span className="image left special"><img src="images/profile_tzahi.jpg" alt="" /></span>
                                    <h3>צחי בן חמו</h3>
                                    <p>
                                       מנכ"ל החברה בעל ניסיון מעל 10 שנים בפיתוח
                                       בניהם רכיבים רבים באתרי אל-על, מגדל- חברת ביטוח,עיריית תל אביב וקופת חולים כללית.
                                       מומחה בתחומו יודע לבנות מערכות שלמות מאפס.
                                    </p>
                                </div>
                                <div className="column">
                                    <span className="image left special"><img src="" alt="" /></span>
                                    <h3>משה-אביאל יוסף</h3>
                                    <p style={{"font-size":"16px"}} className="mb-2">
                                        ידע בתחומים הבאים:
                                    </p>
                                    <ul>
                                        <li>שימוש במגוון רחב של טכנולוגיות שבעיקרן ,C# ,asp.net, React-Redux
                                            html ,css, jquery, bootstrap
                                        </li>
                                        <li>תחזוקה ופיתוח אתרים.</li>
                                        <li>יצירת וצריכת Web API.</li>
                                        <li>בניית אתרי אינטרנט רספונסיביים.</li>
                                        <li>שימוש במערכת ניהול גרסות TFS של חברת Microsoft.</li>
                                        <li>עבודה מול מסדי נתונים רלציוניים ושימוש ב SQL.</li>
                                        <li>עבודה בצוות רחב של מפתחים, אנשי QA, ראשי צוותים ומנהלי פרויקטים. </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </section>
                    

                    <section id="contact">
                            <div className="social column">
                             <img src="/images/homeServiceBox_1.jpg" />
                            </div>

                            <div className="column">
                                <h3>צרו קשר</h3>
                                <form className="formclass" action="#" method="post">
                                    <div className="field half first">
                                        <label for="name">שם מלא</label>
                                        <input name="name" id="name" type="text" placeholder="Name"></input>
                                    </div>
                                    <div className="field half">
                                        <label for="email">דואר אלקטרוני</label>
                                        <input name="email" id="email" type="email" placeholder="Email"></input>
                                    </div>
                                    <div className="field">
                                        <label for="message">תוכן</label>
                                        <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
                                    </div>
                                    <ul className="actions">
                                        <li><input value="שלח" className="button" type="submit"></input></li>
                                    </ul>
                                </form>
                            </div>
                    </section>
                    
                    </div>
                
            )
        }   
}


export default GenericComponent;