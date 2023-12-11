import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css';

type Props = {}

const page = (props: Props) => {

  return (
    <main>
      <h3 className={styles.title}>Display only some lines from a paragraph</h3>
      <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '2rem' }}>
        <CardMedia
          sx={{ height: 240 }}
          image="/lizard.webp"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.lizarddescription}>
            Lizards are a widespread group of squamate reptiles, with over 7,000 species,
            ranging across all continents except Antarctica, as well as most oceanic island chains.
            The group is paraphyletic since it excludes the snakes and Amphisbaenia,
            and some lizards are more closely related to these two excluded groups than
            they are to other lizards. Lizards range in size from chameleons and geckos a few
            centimeters long to the 3-meter-long Komodo dragon.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 240 }}
          image="/Ladybug.webp"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ladybug
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.ladydescription}>
            Coccinellidae (/ˌkɒksɪˈnɛlɪdiː/) is a widespread family of small beetles.
            They are commonly known as ladybugs in North America and ladybirds in the United Kingdom;
            "lady" refers to mother Mary. Entomologists use the names ladybird beetles or
            lady beetles to avoid confusion with true bugs. The more than 6,000 described
            species have a global distribution and are found in a variety of habitats.
            They are oval beetles with a domed back and flat underside. They are sexually dimorphic;
            adult females are larger than males. Many of the species have conspicuous aposematic (warning)
            colours and patterns, such as red with black spots, that warn potential predators that they taste bad.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </main>
  )
}

export default page;
