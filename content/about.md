
---
title: About
type: landing
---

{{< custom-toc >}}


## Our Why

Seanome builds open-source software to figure out how the genes of weird animals in the ocean can help us live longer, healthier, and more sustainable lives. 

### Mission

> Our mission is to unlock breakthroughs from ocean biodiversity by building open genomics tools

Biodiversity brought us breakthroughs like [Ozempic](https://en.wikipedia.org/wiki/Semaglutide) (derived from [lizard venom](https://medicine.uq.edu.au/article/2024/04/rise-ozempic-how-surprise-discoveries-and-lizard-venom-led-new-class-weight-loss-drugs)) and [anti-HIV and anti-cancer compounds](https://ocean.si.edu/ocean-life/invertebrates/sea-sponge-hiv-medicine) from a single innovative organism, [ancient sea sponges](https://en.wikipedia.org/wiki/Tectitethya_crypta), are a tiny glimpse of what’s possible when we start to dive into the ocean's depths. These discoveries come from a handful of species representing a tiny fraction of Earth’s biodiversity. We’ve only begun to explore nature’s 4 billion years of experiments.

### Vision

> Our vision is to open-source the code of life, empowering humanity’s transformation to a world guided by nature's ancient wisdom


![](/media/midjourney/future-city.png)

Imagine a world where we drive cars (maybe self-driving?) out of seashells, our homes are built from from tree- and coral-inspired materials filtering our air and water for us, and disease is eliminated because we know how nature has solved every molecular problem. We see a future where given any problem, we ask, how has nature already solved this problem? How has nature already solved this disease? How has nature created strong materials that withstand the test of time and eliminate the need for landfills?


## Why the Ocean?

Home to [~80% of animal life](https://www.pnas.org/doi/full/10.1073/pnas.1711842115), the ocean is home to animals with unique adaptations that can’t exist on land, and has given us transformational technology (jellyfish's green fluorescent protein, GFP) without which we wouldn't be able to develop [COVID vaccines](https://www.nature.com/articles/s41586-020-2639-4) or [cancer treatments](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383682/). The extraordinary biodiversity of the ocean created fast-evolving immune systems to battle [100 million viruses](https://www.annualreviews.org/content/journals/10.1146/annurev-marine-120709-142805) per teaspoon of seawater. This rich ecosystem is nature's most diverse testing ground and offers a gold mine of novel therapeutics (including antivirals, antibiotics, antifungals) and an ideal environment for building better protein analysis tools. If we can decode the ocean’s molecular mysteries, we can understand anything.


## Why Ocean Animals?

Seanome is specifically focused on ocean *animals* (rather than microbes) because of the emergent properties appearing in complex organ systems. Where microbes are like single-family homes, animal bodies are like cities, requiring municipal-wide waste management (lymphatic system), communication mechanisms (nervous system), and defense (immune system). At Seanome, we are especially interested in the [neuroimmune](https://en.wikipedia.org/wiki/Neuroimmune_system) axis because of the interplay between our nervous system and immune response. By studying animals with vastly different body plans than ourselves (think octopi, jellyfish, clams), we can learn deep biological truths about disease manifestation.

### An untapped trillion-dollar frontier

43 billion animal genes swim in our oceans, yet we only understand what ~8000 of them do (see analysis at [seanome/2025-biodata-wealth-inequality](https://github.com/seanome/2025-biodata-wealth-inequality)). Of these, already 13 FDA-approved drugs worth $8.4B have been identified, including [anti-HIV and anti-cancer compounds](https://ocean.si.edu/ocean-life/invertebrates/sea-sponge-hiv-medicine) from the *same* organism, an [ancient sea sponge (*Tectitethya crypta*)](https://en.wikipedia.org/wiki/Tectitethya_crypta).

## What we do

At Seanome, we build open-source software to annotate proteins of unknown function. As >>99% of proteins on the planet are of unknown function, we are solving a problem with immense potential to transform life as we know it.

### [Kmerseek](https://github.com/seanome/kmerseek/): A blazing-fast protein function predictor

Seanome's Kmerseek bridges the evolutionary gap between marine and human genomes. By creating an alternative biochemical latent space and speeding up computation ~1000x, Kmerseek finds similarities between proteins that other tools don't see.

### [nf-core/proteinannotator](https://github.com/nf-core/proteinannotator): The best protein annotation pipeline in the world

An astounding 14 quadrillion potential proteins exist in the world. Scientists have functionally annotated ~500,000 of those proteins in UniProtKB through exceptional manual effort. However, these annotations are biased toward well-studied organisms, undersampling billions of species. Manual curation cannot realistically annotate all proteins on the scale of the Earth, and at Seanome, our vision is to create the best protein annotator for any organism. As no tool will perfectly annotate all proteins, we’re building the `nf-core/proteinannotator` pipeline as a “wisdom of crowds” approach across methods like DIAMOND-blastp, InterProScan, HMMer, FoldSeek, and emerging tools like Kmerseek. This work aims to support the broader scientific community's efforts to catalog and understand global biodiversity through large-scale sequencing projects.

### Initial Application: Arctic Clams

[Arctic clams](https://blog.seanome.org/p/curing-diseases-with-arctic-clams) have already solved multiple human problems: they can live for hundreds of years, regenerate their shells (if we could regenerate our skulls and spine like clams, we could add 5-15 years of healthy human life), and outsmarted a chronic nerve pain disease (neuropathy) affecting ~20 million people in the US+EU, a $93.9B/yr market.

## Future Applications


{{< future-applications-grid >}}

<div class="future-applications-card">
  <!-- <img src="/media/applications/health.jpg" alt="Health"> -->
  <h3>Health</h3>
  <p>The next cure for cancer is swimming in the ocean — where we've explored less than 1% of species for medicines, missing solutions like Arctic clams naturally tolerating neurotoxins causing human disease. Seanome unlocks nature’s 4 billion year old pharmacy, democratizing access and empowering scientists worldwide to accelerate the discovery of breakthrough therapies for cancer, neurodegeneration, antibiotic resistance, and beyond.</p>
</div>

<div class="future-applications-card">
  <!-- <img src="/media/applications/longevity.jpg" alt="Longevity"> -->
  <h3>Longevity</h3>
  <p>The ocean harbors Earth’s longest-lived animals: from clams surviving over 500 years to jellyfish reversing aging to fish perfecting natural cryopreservation with <a href="https://en.wikipedia.org/wiki/Antifreeze_protein">antifreeze proteins</a>. Seanome decodes these time-defying adaptations, beginning with Arctic clams that naturally protect against neurotoxins, to transform marine wisdom into innovations for human healthspan.
</p>
</div>

<div class="future-applications-card">
  <!-- <img src="/media/applications/synthetic-bio.jpg" alt="Synthetic Biology"> -->
  <h3>Synthetic Biology</h3>
  <p>The next CRISPR is swimming in the ocean, but we need the right tools to find it among the >99% of unexplored marine genes. Seanome is building open-source computational tools to unlock this molecular library, helping create a future without landfills, where cars are made from seashells and our homes are built from coral-inspired materials filtering our air and water.</p>
</div>

<div class="future-applications-card">
  <!-- <img src="/media/applications/climate.jpg" alt="Climate"> -->
  <h3>Climate</h3>
  <p>From scalding volcanic vents to freezing Arctic waters, ocean organisms have perfected life in Earth’s most extreme environments across 4 billion years of climate change. Carbon-storing shell proteins, pressure-resistant structural proteins, and <a href="https://beautymatter.com/articles/arcaea-acquires-biotech-start-up-gadusol-laboratories">UV-shielding pigments</a> are all swimming under our flippers. Seanome decodes these ancient survival mechanisms, transforming marine adaptations into innovations for a climate-resilient future.</p>
</div>

{{< /future-applications-grid >}}



## Leadership

{{< people groups="Board of Directors,Scientific Advisory Board" sort_by="sort_order" ascending="true" >}}
