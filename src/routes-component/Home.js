import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <h2>History About Calculator</h2>
      <p>
        It is almost impossible for us to imagine mathematics without something
        as seemingly simple as a calculator. That being said, the calculators we
        know today were not invented until the 1970s, and the use of smartphones
        as calculators did not begin until at least the late nineties. But that
        doesn’t mean that mathematical tools were not available before the 20th
        century—there were many different computing machines created long before
        digital calculators and smartphones. The first tool created specifically
        for use in mathematical computations was the abacus, likely invented in
        Sumeria around 2500 B.C. The abacus was a table of successive columns
        with beads or stones representing a single unit, which could be used for
        addition or subtraction. Other cultures altered and refined the abacus;
        the Chinese, for example, put beads on wire within a bamboo frame to
        enhance ease of use. Unfortunately, the abacus was not very useful for
        multiplication or division, necessitating the invention of a new and
        more sophisticated device. Fast forward 4,500 years to 1617, when
        Scottish mathematician John Napier published Rabdology, or “calculation
        with rods.” In his writing, Napier described a device that came to be
        known as Napier’s bones. The “bones” are thin rods, which are inscribed
        with multiplication tables, and the user determines their sum by
        changing the vertical alignment of the rods, and horizontally reading
        the multiplication tables. While these devices greatly assisted
        calculations, they were not true “calculators,” merely assisting the
        person doing the mental calculation. In 1642, the first true
        “calculator” was invented: one that performed calculations through a
        clockwork-type of mechanism. The Pascal calculator, invented by French
        inventor and mathematician Blaise Pascal, was lauded for attempting
        arithmetic calculations previously thought impossible. But
        unfortunately, they were difficult to produce and very few were ever
        made. The mechanical calculator then invented by Thomas de Colmar in the
        mid-nineteenth century, and subsequent others, were easier to produce,
        extremely large and bulky–not at all the pocket calculators we know
        today. Curt Herzstark invented the first handheld, mechanic calculator
        in 1945, from a design he had created in 1938. Shaped like a stout
        pepper grinder, the Curta calculators were produced in large quantities
        until 1970, when a company in Japan invented the first digital pocket
        calculator and the demand for the antiquated device faded. Companies in
        the United States, such as Texas Instruments, adapted the design of the
        Japanese device, and enhanced it by creating the graphing calculators we
        know today. With the invention of the first smartphone in 1995,
        individuals began to replace expensive digital calculators with the
        multiuse device. This required even the most sophisticated calculator
        designs to be upgraded in order to remain relevant in the market.
      </p>
    </div>
  );
}

export default Home;
