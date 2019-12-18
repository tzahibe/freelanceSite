import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

class CarouselComponenet extends React.Component {
  render() {
    const options = {
        items: 4,
        nav: false,		
        loop:true,
        autoplay: false,
        dots: true,
		//autoWidth:true,
        margin: 40,
        slideSpeed: 5000,
        smartSpeed: 1300,
        //loop: true,
        rtl: true,
        //animateOut: 'fadeOut',
         navText: ["", ""],
		responsiveClass:true,
		responsive:{1024:{ items:3 }, 768:{ items:3}, 480:{ items:2, margin: 30}, 0:{ items:2, margin: 30}}
      };

    return (
       <OwlCarousel ref="gallery" options={options}>
               <div className="column products img1">
                                <div class="inner_text">
                                <h3 className="center">בניית אתרים רספונסיבים</h3>
                                    <p>
                                    נבנה לכם אתר רספונסיבי שאנחנו בונים מותאם למכשירים חכמים וטבלטים בעיצוב ייחודי ויגדיל את התנועה לאתר בעשרות אחוזים.                                    </p>
                                    </div>
                                </div>
                               

                                <div className="column products img2">
                                <h3 className="center">בניית אתרים נגישים</h3>
                                <div class="inner_text">
                                    <p>
                                    בתאריך  25/10/13 נכנסו לתוקף תקנות נגישות חדשות המחיבות אתרים להיות נגישים. נתאים לכם את האתר לתקני הנגישות העולמיים באופן היעיל והמקצועי ביותר
                                    </p>
                                </div>
                                </div>

                                <div className="column products img4">
                                <h3 className="center">קידום אתרים</h3>
                                <div class="inner_text">
                                    <p>
                                    רוצים אתר עם תנועה גדולה של לקוחות? הגעתם למקום הנכון, באמצעות ניתוח ואיפיון מילות מפתח ובנייה נכונה נאפשר לאתר שלכם לקבל דירוג גבוהה בגוגל ולהופיע בדפים הראשונים ולקבל חשיפה גדולה יותר.
                                    </p>
                                    </div>

                                </div>

                                  <div className="column products img4">
                                  <h3 className="center">תחזוקה שוטפת</h3>
                                  <div class="inner_text">
                                    <p>
                                            כחלק משירותנו אנחנו נותנים גם תחזוקה שוטפת לכל אתר שקיים, אם יש לכם אתר שקניתם ואתם רוצים רכיבים נוספים
                                            או לעדכן ולבצע שינויים נוכל לסייע וללוות אותכם ואף לשפר באופן ניכר ובמסירות רבה!    
                                    </p>
                                    </div>
                                </div>

                                  <div className="column products img4">
                                  <h3 className="center">בניית דפי נחיתה</h3>
                                  <div class="inner_text">
                                    <p>
                                    הצוות המיומן שלנו יבנו לך דף נחיתה מתקדם בו תוכלו להרחיב את רשימת הדיוור, להגדיל את התנועה לאתר, לקדם שירותים ומוצרים, ולהביא ליותר פעילות מצד הלקוחות ועוד!                                  
                                    </p>
                                    </div>
                                </div>

                                  <div className="column products img4">
                                  <h3 className="center">בניית אתרי תדמית</h3>
                                  <div class="inner_text">
                                    <p>
                                    הדבר החשוב ביותר באתר תדמית הוא אתר שבאמת יקדם את העסק וייתן תמורה להשקעה הרבה מבחינה כספית ומחשבה, לכן תכנון מדויק שמלווה באיפיון, הכרת המוצר ועולם התוכן, וביצוע ניתוחי שיווק יביא לכם היתרון גדול על המתחרים!                                    </p>
                                    </div>
                                </div>

                                    <div className="column products img4">
                                    <h3 className="center">ממשק ניהול תוכן</h3>
                                    <div class="inner_text">
                                    <p>
                                    אחד מהשירותים המובילים שלנו הוא בניית אתרי אינטרנט חכמים שיודעים להפוך מבקרים ללקוחות. אנו מפתחים במגוון טכנולוגיות וכמובן שכל האתרים שלנו מותאמים לסלולר ולמכשירים ניידים ככלל.
                                    </p>
                                    </div>
                                </div>
                       
                                    
    </OwlCarousel>
    );
  }
}

export default CarouselComponenet;