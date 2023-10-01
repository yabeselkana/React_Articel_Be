const Pool = require("../config/db");
const selectAll = ({ limit, offset, sort, sortby, keyword }) => {
  return Pool.query(`SELECT * FROM artikel where 	title ilike '%${keyword}%' ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
};

const selectSearchArticles = ({ keyword, sort }) => {
  return Pool.query(`SELECT * FROM artikel  where 	title ilike '%${keyword}%'`);
};

const select = (id) => {
  return Pool.query(`SELECT * FROM artikel  WHERE id='${id}'`);
};
const insert = (data) => {
  const { id, title, content, writer, photo } = data;
  return Pool.query(`INSERT INTO artikel (id,writer,title,content,image ) VALUES (${id},'${writer}','${title}','${content}','${photo}')`);
};
const update = (data) => {
  const { id, title, content, writer, photo } = data;
  return Pool.query(`UPDATE artikel  SET writer='${writer}', title='${title}', content='${content}', image='${photo}' WHERE id='${id}'`);
};
const deleteData = (id) => {
  return Pool.query(`DELETE FROM artikel  WHERE id=${id}`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM artikel ");
};

const findId = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id FROM artikel  WHERE id=${id}`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  selectAll,
  selectSearchArticles,
  select,
  insert,
  update,
  deleteData,
  countData,
  findId,
};
