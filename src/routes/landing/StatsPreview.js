import React from 'react'
import { motion } from "framer-motion";
import statsPreview from '../../data/statsPreview';



export default class StatsPreview extends React.Component {
  render() {
    return (
      <article className="section-7 flex-container flex-column txt-center">
        <section className="highlights flex-container flex-column">
          {statsPreview.map((stats) => (
            <div key={stats.id} className="highligh-container">
              <motion.div
                initial={{ opacity: 0, translateX: -300 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0, translateX: -300 }}
                transition={{ duration: 2 }}
              >
                <img
                  width="50"
                  height="50"
                  className="hightlight-img"
                  src={stats.img}
                  alt=""
                  aria-hidden="true"
                />
              </motion.div>
              <div>
                <h3>{stats.stats}</h3>
                <p className="pop-font txt-white">{stats.name}</p>
              </div>
            </div>
          ))}
        </section>
      </article>
    )
  }
}
