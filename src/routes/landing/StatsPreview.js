import React from 'react'
import { motion } from "framer-motion";
import statsPreview from '../../data/statsPreview';

const StatsPreview = () => {
  return (
    <article className="section-7 flex-container flex-column txt-center">
      <section className="highlights flex-container flex-column">
        {statsPreview.map((stats) => (
          <div key={stats.id} className="highligh-container">
            <motion.img
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              width="50"
              height="50"
              className="hightlight-img"
              src={stats.img}
              alt=""
              aria-hidden="true"
            />
            <h3>{stats.stats}</h3>
            <p className="pop-font txt-white">{stats.name}</p>
          </div>
        ))}
      </section>
    </article>
  )
}


export default StatsPreview;