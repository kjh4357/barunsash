const aligoapi = require("aligoapi");
// 해당 예제는 npm에서도 확인하실 수 있습니다
// npm i aligoapi
// https://www.npmjs.com/package/aligoapi

var AuthData = {
  key: "ho1yae29ulb4dose9fubrjdcife2crxv",
  // 이곳에 발급받으신 api key를 입력하세요
  user_id: "2",
  // 이곳에 userid를 입력하세요
};
// 인증용 데이터는 모든 API 호출시 필수값입니다.

// AuthData.testmode_yn = 'Y'
// test 모드를 사용하시려면 'Y'값으로 설정하세요

// form데이터를 포함한 request를 모두 보내시고 JSON data는 body pares를 사용하시기 바랍니다.

export const sendPhoneMessage = (req, res) => {
  // 메시지 발송하기

  // req.body = {
  /*** 필수값입니다 ***/
  //   sender: 발신자 전화번호  // (최대 16bytes)
  //   receiver: 수신자 전화번호 // 컴마()분기 입력으로 최대 1천명
  //   msg: 메시지 내용	// (1~2,000Byte)
  /*** 필수값입니다 ***/
  //   msg_type: SMS(단문), LMS(장문), MMS(그림문자)
  //   title: 문자제목(LMS, MMS만 허용) // (1~44Byte)
  //   destination: %고객명% 치환용 입력
  //   rdate: 예약일(현재일이상) // YYYYMMDD
  //   rtime: 예약시간-현재시간기준 10분이후 // HHMM
  //   image: 첨부이미지 // JPEG, PNG, GIF
  // }
  // req.body 요청값 예시입니다.

  aligoapi
    .send(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};
