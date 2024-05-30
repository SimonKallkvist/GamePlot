import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area='nav' bg='coral'>
          Nav
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' bg='teal'>
            aside
          </GridItem>
        </Show>
        <GridItem area='main' bg='red'>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
