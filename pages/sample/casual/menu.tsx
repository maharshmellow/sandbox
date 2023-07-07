import Head from 'next/head';
import styled from 'styled-components';
import NavBar from '../../../components/sample/casual/NavBar';
import AzeretFontContainer from '@/components/sample/casual/AzeretFontContainer';

const Container = styled.div`
  border: 20px rgb(255, 229, 0) solid;
  min-height: 120vh;
  padding: 75px;

  background-color: white;
  color: black;

  letter-spacing: -0.05em;

  @media (max-width: 768px) {
    padding: 10px;
    border: none;
  }
`;

const Menu = styled.div`
  width: 90%;
  max-width: 1200px;

  border-radius: 10px;
  margin: auto;
  margin-top: 150px;
`;

const MenuSection = styled.div``;

const MenuSectionTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  letter-spacing: -0.05em;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const MenuItems = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  margin-top: 50px;
  margin-bottom: 100px;

  @media (min-width: 900px) {
    column-gap: 10rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MenuItem = styled.div`
  width: 100%;
  line-height: 1.2em;
  padding-bottom: 2em;
`;

const MenuItemPrice = styled.div`
  float: right;
`;

const MenuItemTitle = styled.div`
  font-size: 1.1em;
  font-weight: 700;
`;

const MenuItemDescription = styled.div`
  font-size: 0.9em;
`;

export default function CasualRestaurantMenu() {
  return (
    <>
      <Head>
        <title>Casual Restaurant - Menu</title>
        <meta name="description" content="Casual Restaurant - Menu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/sample/casual/favicon.ico" />
      </Head>
      <AzeretFontContainer>
        <Container>
          <NavBar />
          <Menu>
            <MenuSection>
              <MenuSectionTitle>SMALL PLATES</MenuSectionTitle>
              <MenuItems>
                <MenuItem>
                  <MenuItemPrice>$15</MenuItemPrice>
                  <MenuItemTitle>GYOZA</MenuItemTitle>
                  <MenuItemDescription>Pan-fried pork and cabbage dumplings</MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$15</MenuItemPrice>
                  <MenuItemTitle>SHISHITO</MenuItemTitle>
                  <MenuItemDescription>Seared shishito peppers with salt</MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$18</MenuItemPrice>
                  <MenuItemTitle>BAO</MenuItemTitle>
                  <MenuItemDescription>Braised pork belly, cucumber, hoisin</MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$18</MenuItemPrice>
                  <MenuItemTitle>TAKOYAKI</MenuItemTitle>
                  <MenuItemDescription>
                    Octopus, beni shoga, bonito, and scallion
                  </MenuItemDescription>
                </MenuItem>
              </MenuItems>
            </MenuSection>
            <MenuSection>
              <MenuSectionTitle>RAMEN</MenuSectionTitle>
              <MenuItems>
                <MenuItem>
                  <MenuItemPrice>$16</MenuItemPrice>
                  <MenuItemTitle>SHIO</MenuItemTitle>
                  <MenuItemDescription>
                    Salt broth, chashu, scaillion, egg, nori, straight noodles
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$18</MenuItemPrice>
                  <MenuItemTitle>SHOYU</MenuItemTitle>
                  <MenuItemDescription>
                    Soy broth, chashu, scallion, egg, nori, curly noodles
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$18</MenuItemPrice>
                  <MenuItemTitle>MISO</MenuItemTitle>
                  <MenuItemDescription>
                    Miso broth, chashu, corn, bamboo, egg, scallion, nori, curly noodles
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$20</MenuItemPrice>
                  <MenuItemTitle>TONKOTSU</MenuItemTitle>
                  <MenuItemDescription>
                    Pork broth, chashu, bamboo, scallion, egg, nori, sesame oil, straight noodles
                  </MenuItemDescription>
                </MenuItem>
              </MenuItems>
            </MenuSection>

            <MenuSection>
              <MenuSectionTitle>+ ADD-ONS</MenuSectionTitle>
              <MenuItems>
                <MenuItem>
                  <MenuItemPrice>$2</MenuItemPrice>
                  <MenuItemTitle>TOPPINGS</MenuItemTitle>
                  <MenuItemDescription>
                    Scallion, sesame seeds, chili oil, nori, beni shoga, garlic paste
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$3</MenuItemPrice>
                  <MenuItemTitle>PROTEIN</MenuItemTitle>
                  <MenuItemDescription>
                    Poached egg, soft-boiled egg, chashu, chicken, tofu, naruto
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$2</MenuItemPrice>
                  <MenuItemTitle>VEGETABLES</MenuItemTitle>
                  <MenuItemDescription>
                    Bean sprouts, bok choy, spinach, enoki, bamboo, cabbage, corn
                  </MenuItemDescription>
                </MenuItem>
              </MenuItems>
            </MenuSection>

            <MenuSection>
              <MenuSectionTitle>DRINKS</MenuSectionTitle>
              <MenuItems>
                <MenuItem>
                  <MenuItemPrice>$8</MenuItemPrice>
                  <MenuItemTitle>SAKE</MenuItemTitle>
                  <MenuItemDescription>Junmai daiginjo-shu</MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$7</MenuItemPrice>
                  <MenuItemTitle>BEER</MenuItemTitle>
                  <MenuItemDescription>Komugi </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$9</MenuItemPrice>
                  <MenuItemTitle>APEROL SPRITZ</MenuItemTitle>
                  <MenuItemDescription>Prosecco, aperol, tonic, yuzu</MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$9</MenuItemPrice>
                  <MenuItemTitle>UMESHU</MenuItemTitle>
                  <MenuItemDescription>Plum wine</MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$5</MenuItemPrice>
                  <MenuItemTitle>HOJICHA</MenuItemTitle>
                  <MenuItemDescription>Roasted green tea</MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$5</MenuItemPrice>
                  <MenuItemTitle>PU-ERH</MenuItemTitle>
                  <MenuItemDescription>Fermented black tea</MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$5</MenuItemPrice>
                  <MenuItemTitle>GENMAICHA</MenuItemTitle>
                  <MenuItemDescription>Green tea with roasted brown rice</MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemPrice>$5</MenuItemPrice>
                  <MenuItemTitle>EARL GREY</MenuItemTitle>
                  <MenuItemDescription>Black tea with bergamot</MenuItemDescription>
                </MenuItem>
              </MenuItems>
            </MenuSection>
          </Menu>
        </Container>
      </AzeretFontContainer>
    </>
  );
}
