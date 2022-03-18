import React from 'react';
import Section from '../../common/Section';
import Header from '../../common/Header';
import Container from '../../common/Container';
import { ParagraphContent } from './styled';

const AuthorPage = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Dorota"
            body={
                <><p>
                    <ParagraphContent>

                        <strong>Na codzień zajmuję się inżynierią elektroniczną.</strong> Praca tym zawodzie, jak i wielu podobnych, wymaga
                        intensywnego myślenia i skupienia uwagi przez wiele godzin
                        w ciągu dnia. Dlatego w takich wypadkach bardzo cenna jest <em>umiejętność dobrego wypoczywania</em> i
                        chociaż na
                        jakiś czas odsunięcia od siebie wszelkich problemów. Niektórzy uprawiają sport lub chodzą na
                        spacery.
                        <strong>Ja
                            upodobałam sobie pracę na łonie natury.🌿</strong> Kiedy tylko mogę, przebywam w ogrodzie w towarzystwie
                        kwiatów i
                        innych roślin. 🍓 Towarzystwo zieleni daje mi ukojenie i uspokojenie. Pracując fizycznie w ogrodzie mam
                        też
                        zapewnioną gimnastykę i ruch na świeżym powietrzu. Uwielbiam przyglądać się jak rosną moje krzewy,
                        zioła ☘️
                        i jak
                        rozwijają swoje pąki kwiaty. 🌺

                    </ParagraphContent>
                </p>
                </>
            }
        />


    </Container>
);

export default AuthorPage;

