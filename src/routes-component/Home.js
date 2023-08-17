import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <h2 data-testid="user-id">History About Calculator</h2>
      <p>
        The earliest forms of calculators were mechanical devices, such as the
        abacus and slide rule. The abacus is a counting device that dates back
        to Roman times, while the slide rule appeared in the 17th century and
        was used to perform mathematical calculations. However, it was with the
        advent of electronics that modern calculators began to be developed. The
        first electronic calculators were created in the 1940s and 1950s, but
        they were very large and expensive, and were not suitable for consumer
        use. This changed in the 1960s when portable electronic calculators
        began to be marketed. The first consumer portable electronic calculator
        was the &rdquo;Cal Tech&rdquo;, launched in 1967 by Texas Instruments.
        It was capable of performing all four basic operations, but cost over
        $200, making it a luxury item at the time. Over the years, calculators
        have become more and more sophisticated and affordable. Scientific
        calculators appeared in the 1970s and were followed by graphing
        calculators in the 1980s. Nowadays, calculators are equipped with many
        advanced features such as graphing, statistics, and even programming. In
        summary, the calculator has come a long way since its mechanical
        beginnings centuries ago. Thanks to advances in technology, it has
        become an indispensable tool for students, professionals and scientists
        around the world.
      </p>
    </div>
  );
}

export default Home;
