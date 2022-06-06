import { Router } from "express";
import { Cat, CatType } from "./cats.model";

const router = Router();

/** READ 고양이 전체 데이터 전부 조회 */
router.get("/", (req, res) => {
  try {
    const cats = Cat;
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      // error: error.message,
    });
  }
});

/** READ 특정 고양이 데이터 조회 */
router.get("/:id", (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.send(400).send({
      success: false,
      // error: error.message,
    });
  }
});

/** CREATE 새로운 고양이 데이터 추가 */
router.post("/", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: {
        data,
      },
    });
  } catch (error) {
    // console.log(error.message);
    res.send(400).send({
      success: false,
      // error: error.message,
    });
  }
});

/** UPDATE 특정 고양이 데이터 수정 */
// 수정을 위해서는 특정 데이터가 있는지 조회가 우선
router.post("/:id", (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error) {}
});

/** PATCH 고양이 데이터를 부분적으로 업데이트 */
router.patch("/:id", (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error) {}
});

/** DELETE 고양이 데이터 삭제 */
router.delete("/:id", (req, res) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error) {}
});

export default router;