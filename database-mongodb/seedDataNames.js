const rawData = [
  {
    "name": "Nike Air Max 2090\nNike Air Max 2090\nMen's Shoe\n1 Color\n$150",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-541527e2-64e0-4873-8fb6-bdf7d903bf3b/air-max-2090-mens-shoe-bL8lLT.jpg",
    "image_url": "https://www.nike.com/t/air-max-2090-mens-shoe-bL8lLT/CT7695-100"
  },
  {
    "name": "Nike Air Max 90\nNike Air Max 90\nMen's Shoe\n3 Colors\n$120",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/9f7f04c0-92b5-4209-8a34-59ff0f978b2a/air-max-90-mens-shoe-xSPlJ1.jpg",
    "image_url": "https://www.nike.com/t/air-max-90-mens-shoe-xSPlJ1/CD0881-101"
  },
  {
    "name": "Air Jordan 3 Retro SE\nAir Jordan 3 Retro SE\nMen's Shoe\n1 Color\n$200",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-8334fb00-7956-46b7-b74e-ae0d87915a74/air-jordan-3-retro-se-mens-shoe-jzW36H.jpg",
    "image_url": "https://www.nike.com/t/air-jordan-3-retro-se-mens-shoe-jzW36H/CK5692-600"
  },
  {
    "name": "Nike Adapt BB 2.0\nNike Adapt BB 2.0\nBasketball Shoe\n1 Color\n$400",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/134cfdfb-418f-4453-bbf8-d7286b21329e/adapt-bb-2-basketball-shoe-vdFwKS.jpg",
    "image_url": "https://www.nike.com/t/adapt-bb-2-basketball-shoe-vdFwKS/BQ5397-001"
  },
  {
    "name": "Nike Air Force 1 Low Black History Month\nNike Air Force 1 Low Black History Month\nMen's Shoe\n1 Color\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/2272c28e-f1e4-4d06-acb1-66cbb4af0115/air-force-1-low-black-history-month-mens-shoe-bBXwTW.jpg",
    "image_url": "https://www.nike.com/t/air-force-1-low-black-history-month-mens-shoe-bBXwTW/CT5534-001"
  },
  {
    "name": "Nike Air Max 95 Black History Month\nNike Air Max 95 Black History Month\nMen's Shoe\n1 Color\n$180",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f84119da-dfaf-4de4-bfd4-d5d16eb53c79/air-max-95-black-history-month-mens-shoe-DpRhS6.jpg",
    "image_url": "https://www.nike.com/t/air-max-95-black-history-month-mens-shoe-DpRhS6/CT7435-901"
  },
  {
    "name": "LeBron 17\nLeBron 17\nBasketball Shoe\n6 Colors\n$200",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/beb8a75f-6d77-4080-966c-f09d980d34e2/lebron-17-basketball-shoe-6LSXgh.jpg",
    "image_url": "https://www.nike.com/t/lebron-17-basketball-shoe-6LSXgh/BQ3177-005"
  },
  {
    "name": "PG 4\nPG 4\nBasketball Shoe\n3 Colors\n$110",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/5175b8a4-0f2e-4a1a-a2ce-caab16c9676d/pg-4-basketball-shoe-tszRns.jpg",
    "image_url": "https://www.nike.com/t/pg-4-basketball-shoe-tszRns/CD5079-002"
  },
  {
    "name": "Nike React Infinity Run Flyknit\nNike React Infinity Run Flyknit\nMen's Running Shoe\n5 Colors\n$160",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7323f202-5cd0-444f-84c8-5f1cef2bccfa/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
    "image_url": "https://www.nike.com/t/react-infinity-run-flyknit-mens-running-shoe-zX42Nc/CD4371-005"
  },
  {
    "name": "Nike Air Zoom SuperRep\nNike Air Zoom SuperRep\nMen's HIIT Class Shoe\n4 Colors\n$120",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7cd306a4-90b1-454e-a884-8ebf4d3afc77/air-zoom-superrep-mens-hiit-class-shoe-ZWLnJW.jpg",
    "image_url": "https://www.nike.com/t/air-zoom-superrep-mens-hiit-class-shoe-ZWLnJW/CD3460-223"
  },
  {
    "name": "Nike Air Max 270 React\nNike Air Max 270 React\nMen's Shoe\n1 Color\n$160",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c0bd73b0-8077-4f97-990b-2697ada65d16/air-max-270-react-mens-shoe-dXfwls.jpg",
    "image_url": "https://www.nike.com/t/air-max-270-react-mens-shoe-dXfwls/CW2625-100"
  },
  {
    "name": "Nike MX-720-818\nNike MX-720-818\nMen's Shoe\n1 Color\n$190",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6dd58b9a-e644-4bad-8a45-d2f5a87cf427/mx-720-818-mens-shoe-gsXgvs.jpg",
    "image_url": "https://www.nike.com/t/mx-720-818-mens-shoe-gsXgvs/CW2621-001"
  },
  {
    "name": "Nike Air Force 1 '07 LV8\nNike Air Force 1 '07 LV8\nMen's Shoe\n4 Colors\n$110",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/1f51dcac-1693-4c3b-8a99-fc6df688ef43/air-force-1-07-lv8-mens-shoe-LpqwrH.jpg",
    "image_url": "https://www.nike.com/t/air-force-1-07-lv8-mens-shoe-LpqwrH/CD0887-001"
  },
  {
    "name": "Nike Air Force 1 React\nNike Air Force 1 React\nMen's Shoe\n3 Colors\n$120",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-fe0b0aa8-5a11-4839-b1ae-28358239e214/air-force-1-react-mens-shoe-b7HKxL.jpg",
    "image_url": "https://www.nike.com/t/air-force-1-react-mens-shoe-b7HKxL/CD4366-100"
  },
  {
    "name": "Nike React Vision\nNike React Vision\nMen's Shoe\n3 Colors\n$140",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/db6c8501-6bd6-459f-9427-348ed05dfc84/react-vision-mens-shoe-k3L6kP.jpg",
    "image_url": "https://www.nike.com/t/react-vision-mens-shoe-k3L6kP/CD4373-002"
  },
  {
    "name": "Nike Air Max 270 React ENG\nNike Air Max 270 React ENG\nMen's Shoe\n4 Colors\n$170",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/80597f5e-8743-4637-8597-c270d8287fa9/air-max-270-react-eng-mens-shoe-x1NpJv.jpg",
    "image_url": "https://www.nike.com/t/air-max-270-react-eng-mens-shoe-x1NpJv/CD0113-401"
  },
  {
    "name": "Nike Air Max 90 Premium\nNike Air Max 90 Premium\nShoe\n2 Colors\n$140",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ce6b3c87-ddcd-4b45-bba2-5ec92c8d1dd1/air-max-90-premium-shoe-LZFTFf.jpg",
    "image_url": "https://www.nike.com/t/air-max-90-premium-shoe-LZFTFf/CJ1794-600"
  },
  {
    "name": "Nike Air VaporMax 360\nNike Air VaporMax 360\nMen's Shoe\n7 Colors\n$225",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/4da78a37-07c4-434c-a226-daef3f7437e1/air-vapormax-360-mens-shoe-b09bdB.jpg",
    "image_url": "https://www.nike.com/t/air-vapormax-360-mens-shoe-b09bdB/CK2718-004"
  },
  {
    "name": "Nike Air Max 90\nNike Air Max 90\nMen's Shoe\n4 Colors\n$120",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/air-max-90-mens-shoe-6n3vKB.jpg",
    "image_url": "https://www.nike.com/t/air-max-90-mens-shoe-6n3vKB/CN8490-002"
  },
  {
    "name": "Air Jordan 1 Retro High OG\nAir Jordan 1 Retro High OG\nShoe\n1 Color\n$118.97\n$170",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ebf6cc14-da6b-45f0-b463-9a7f01cc9834/air-jordan-1-retro-high-og-shoe-rjZHSh.jpg",
    "image_url": "https://www.nike.com/t/air-jordan-1-retro-high-og-shoe-rjZHSh/555088-060"
  },
  {
    "name": "Air Jordan 1 Mid\nAir Jordan 1 Mid\nShoe\n7 Colors\n$115",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/71584fa5-f265-4967-95b1-8cc2f6e09e78/air-jordan-1-mid-shoe-1zMCFJ.jpg",
    "image_url": "https://www.nike.com/t/air-jordan-1-mid-shoe-1zMCFJ/554724-068"
  },
  {
    "name": "Nike Renew Run\nNike Renew Run\nMen's Running Shoe\n6 Colors\n$90",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/915f6f9c-8804-47e2-ba77-f29239445a0a/renew-run-mens-running-shoe-x40hr3.jpg",
    "image_url": "https://www.nike.com/t/renew-run-mens-running-shoe-x40hr3/CK6357-002"
  },
  {
    "name": "Nike Air Zoom Pegasus 36\nNike Air Zoom Pegasus 36\nMen's Running Shoe\n15 Colors\n$120",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/3f602f90-9484-4eec-a7cd-c0a4dd879b29/air-zoom-pegasus-36-mens-running-shoe-D24Mcz.jpg",
    "image_url": "https://www.nike.com/t/air-zoom-pegasus-36-mens-running-shoe-D24Mcz/AQ2203-602"
  },
  {
    "name": "Nike Air Force 1 '07\nNike Air Force 1 '07\nMen's Shoe\n2 Colors\n$90",
    "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/jomszuqr8gw3h18xhpro/air-force-1-07-mens-shoe-JkTGzADv.jpg",
    "image_url": "https://www.nike.com/t/air-force-1-07-mens-shoe-JkTGzADv/315122-111"
  },
  {
    "name": "Nike Air Force 1 '07\nNike Air Force 1 '07\nMen's Shoe\n3 Colors\n$90",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ndbgikrmsa0ejcdmkvpg/air-force-1-07-mens-shoe-TjqcX1.jpg",
    "image_url": "https://www.nike.com/t/air-force-1-07-mens-shoe-TjqcX1/CJ0952-100"
  },
  {
    "name": "Kyrie 6 Trophies\nKyrie 6 Trophies\nBasketball Shoe\n1 Color\n$140",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/34b7a40d-5113-4833-baa7-4063994f6545/kyrie-6-trophies-basketball-shoe-Lw61xf.jpg",
    "image_url": "https://www.nike.com/t/kyrie-6-trophies-basketball-shoe-Lw61xf/CD5026-900"
  },
  {
    "name": "Kyrie 6\nKyrie 6\nBasketball Shoe\n6 Colors\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/efb992a9-ceee-407b-abed-02917b7ae7a6/kyrie-6-basketball-shoe-TW3wsC.jpg",
    "image_url": "https://www.nike.com/t/kyrie-6-basketball-shoe-TW3wsC/BQ4630-003"
  },
  {
    "name": "LeBron 17 Monstars\nLeBron 17 Monstars\nBasketball Shoe\n1 Color\n$225",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f9b8eeb0-2a77-41d3-ad6d-233491fbe365/lebron-17-monstars-basketball-shoe-CR7772.jpg",
    "image_url": "https://www.nike.com/t/lebron-17-monstars-basketball-shoe-CR7772/CD5050-400"
  },
  {
    "name": "LeBron 17 I Promise\nLeBron 17 I Promise\nBasketball Shoe\n1 Color\n$200",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/65fa62a0-71ff-45fc-809e-0e624678fedd/lebron-17-i-promise-basketball-shoe-DcJ6sx.jpg",
    "image_url": "https://www.nike.com/t/lebron-17-i-promise-basketball-shoe-DcJ6sx/CD5052-300"
  },
  {
    "name": "Zoom Freak 1 Employee of the Month\nZoom Freak 1 Employee of the Month\nBasketball Shoe\n1 Color\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/89622a20-20d9-4ac7-acf1-a01ded1208ae/zoom-freak-1-employee-of-the-month-basketball-shoe-1GWdw1.jpg",
    "image_url": "https://www.nike.com/t/zoom-freak-1-employee-of-the-month-basketball-shoe-1GWdw1/CD4962-001"
  },
  {
    "name": "PG 4 Gatorade ASW\nPG 4 Gatorade ASW\nBasketball Shoe\n2 Colors\n$120",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bb4e17cf-6475-4def-8744-9f24588737d1/pg-4-gatorade-asw-basketball-shoe-fPZMr4.jpg",
    "image_url": "https://www.nike.com/t/pg-4-gatorade-asw-basketball-shoe-fPZMr4/CD5078-700"
  },
  {
    "name": "Nike Air Max 90\nNike Air Max 90\nMen's Shoe\n1 Color\n$140",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/baed92a3-318a-4769-b4a4-b860da62ada8/air-max-90-mens-shoe-sTJtCH.jpg",
    "image_url": "https://www.nike.com/t/air-max-90-mens-shoe-sTJtCH/CT5066-100"
  },
  {
    "name": "Nike Air Max 270 React\nNike Air Max 270 React\nMen's Shoes\n1 Color\n$170",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-f313ae2a-9ce1-4ac6-a01e-cb79e4b364ad/air-max-270-react-mens-shoes-BGV3Hm.jpg",
    "image_url": "https://www.nike.com/t/air-max-270-react-mens-shoes-BGV3Hm/CT5064-100"
  },
  {
    "name": "Nike Air Max 720 20\nNike Air Max 720 20\nMen's Shoe\n1 Color\n$180",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-f06d2355-a5d0-40f5-8b9d-e90c9a739ea7/air-max-720-20-mens-shoe-qZzvvn.jpg",
    "image_url": "https://www.nike.com/t/air-max-720-20-mens-shoe-qZzvvn/CT5229-100"
  },
  {
    "name": "LeBron 7 QS\nLeBron 7 QS\nMen's Shoe\n2 Colors\n$200",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-dc3186d3-9d78-489f-b168-9a44f83fc5ea/lebron-7-qs-mens-shoe-DN0BJz.jpg",
    "image_url": "https://www.nike.com/t/lebron-7-qs-mens-shoe-DN0BJz/CU5646-400"
  },
  {
    "name": "Nike Zoom KD12 Don C\nNike Zoom KD12 Don C\nBasketball Shoe\n1 Color\n$160",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b64f0952-92c5-459a-a320-c7690b455208/zoom-kd12-don-c-basketball-shoe-sKSVWd.jpg",
    "image_url": "https://www.nike.com/t/zoom-kd12-don-c-basketball-shoe-sKSVWd/CD4982-900"
  },
  {
    "name": "Air Jordan XXXIV\nAir Jordan XXXIV\nBasketball Shoe\n5 Colors\n$180",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/4837ab50-c03a-44dc-adaa-8e1e5ce7bc0a/air-jordan-xxxiv-basketball-shoe-RG4jCV.jpg",
    "image_url": "https://www.nike.com/t/air-jordan-xxxiv-basketball-shoe-RG4jCV/AR3240-101"
  },
  {
    "name": "Nike Blazer Mid Premium\nNike Blazer Mid Premium\nMen's Shoe\n2 Colors\n$100",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-0b622f4f-a108-447c-80fb-2dd99d1a403c/blazer-mid-premium-mens-shoe-JWQfgd.jpg",
    "image_url": "https://www.nike.com/t/blazer-mid-premium-mens-shoe-JWQfgd/CU6679-100"
  },
  {
    "name": "Nike Air Force 1 Premium\nNike Air Force 1 Premium\nMen's Shoe\n2 Colors\n$140",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bb6d15c2-f315-411c-9cfe-1b5fa42be4fc/air-force-1-premium-mens-shoe-mcf5r6.jpg",
    "image_url": "https://www.nike.com/t/air-force-1-premium-mens-shoe-mcf5r6/CU6675-100"
  },
  {
    "name": "Nike Blazer Mid '77 Vintage\nNike Blazer Mid '77 Vintage\nShoe\n4 Colors\n$100",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-shoe-flCCX4.jpg",
    "image_url": "https://www.nike.com/t/blazer-mid-77-vintage-shoe-flCCX4/BQ6806-100"
  },
  {
    "name": "Nike Killshot 2 Leather\nNike Killshot 2 Leather\nMen's Shoe\n4 Colors\n$90",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/dlyapben5bidcjm1vmfh/killshot-2-leather-mens-shoe-zrq1wk.jpg",
    "image_url": "https://www.nike.com/t/killshot-2-leather-mens-shoe-zrq1wk/432997-121"
  },
  {
    "name": "Nike Air VaporMax Flyknit 3\nNike Air VaporMax Flyknit 3\nMen's Shoe\n9 Colors\n$200",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/df72e1ef-04d2-4eb0-9069-b20cf3b01e1b/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg",
    "image_url": "https://www.nike.com/t/air-vapormax-flyknit-3-mens-shoe-JsWsB7/AJ6900-012"
  },
  {
    "name": "Nike Air VaporMax Plus\nNike Air VaporMax Plus\nMen's Shoe\n6 Colors\n$200",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/4caca439-6eff-4347-bfa7-3f0c06f6af03/air-vapormax-plus-mens-shoe-w4xgr4.jpg",
    "image_url": "https://www.nike.com/t/air-vapormax-plus-mens-shoe-w4xgr4/CW6973-600"
  },
  {
    "name": "Nike x Undercover React Presto\nNike x Undercover React Presto\nShoe\n2 Colors\n$180",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/57925393-adc8-485c-9ea7-9be7f1ef35d6/undercover-react-presto-shoe-BWlhSx.jpg",
    "image_url": "https://www.nike.com/t/undercover-react-presto-shoe-BWlhSx/CU3459-200"
  },
  {
    "name": "Nike React Presto Premium\nNike React Presto Premium\nMen's Shoe\n2 Colors\n$140",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/t7a1cgvaqu3zvxafke3f/react-presto-premium-mens-shoe-8gSr9m.jpg",
    "image_url": "https://www.nike.com/t/react-presto-premium-mens-shoe-8gSr9m/CN7664-800"
  },
  {
    "name": "Nike Air Max 97\nNike Air Max 97\nMen's Shoe\n5 Colors\n$170",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/hsbbi3yac0t8ski7qkcp/air-max-97-mens-shoe-3BnJmw.jpg",
    "image_url": "https://www.nike.com/t/air-max-97-mens-shoe-3BnJmw/CI3708-600"
  },
  {
    "name": "Nike CruzrOne\nNike CruzrOne\nUnisex Shoe\n2 Colors\n$150",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ef84ce87-b18b-4f58-9538-5fa273691a25/cruzrone-unisex-shoe-PMDCgh.jpg",
    "image_url": "https://www.nike.com/t/cruzrone-unisex-shoe-PMDCgh/CD7307-700"
  },
  {
    "name": "NikeCourt Tech Challenge 20\nNikeCourt Tech Challenge 20\nMen’s Tennis Shoe\n1 Color\n$120",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-61fe9950-2789-4a8f-9a3c-caf8f6899949/nikecourt-tech-challenge-20-mens-tennis-shoe-jh124m.jpg",
    "image_url": "https://www.nike.com/t/nikecourt-tech-challenge-20-mens-tennis-shoe-jh124m/BQ0234-100"
  },
  {
    "name": "Nike Air Max 1 DNA Ch. 1\nNike Air Max 1 DNA Ch. 1\nMen's Shoe\n1 Color\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/rykd0rb1tzzqks1vpn47/air-max-1-dna-ch-1-mens-shoe-3tFwRJ.jpg",
    "image_url": "https://www.nike.com/t/air-max-1-dna-ch-1-mens-shoe-3tFwRJ/AR3863-100"
  },
  {
    "name": "Nike Air Huarache Run DNA Ch. 1\nNike Air Huarache Run DNA Ch. 1\nMen's Shoe\n1 Color\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/clf3cjy4aoud2tjdsvve/air-huarache-run-dna-ch-1-mens-shoe-kFQcSK.jpg",
    "image_url": "https://www.nike.com/t/air-huarache-run-dna-ch-1-mens-shoe-kFQcSK/AR3864-100"
  },
  {
    "name": "Nike Air Max 270 React\nNike Air Max 270 React\nMen's Shoe\n8 Colors\n$160",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/410b2267-3572-4a6a-82d8-41c1e8d37d0f/air-max-270-react-mens-shoe-zPRv3k.jpg",
    "image_url": "https://www.nike.com/t/air-max-270-react-mens-shoe-zPRv3k/CU3014-181"
  },
  {
    "name": "Nike Air Max 270\nNike Air Max 270\nMen's Shoe\n4 Colors\n$150",
    "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/efwa2z2axzuqhv35gxbz/air-max-270-mens-shoe-qVk0Vw.jpg",
    "image_url": "https://www.nike.com/t/air-max-270-mens-shoe-qVk0Vw/AH8050-100"
  },
  {
    "name": "Nike Air Max Excee\nNike Air Max Excee\nMen's Shoe\n1 Color\n$90",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/4a524ee4-d989-426e-b496-8652ff164df6/air-max-excee-mens-shoe-MhJh6v.jpg",
    "image_url": "https://www.nike.com/t/air-max-excee-mens-shoe-MhJh6v/CD4165-101"
  },
  {
    "name": "Air Jordan 1 Mid SE\nAir Jordan 1 Mid SE\nMen's Shoe\n3 Colors\n$125",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-cdfb4ffd-c3d4-4cb6-8c2e-c0197a27d346/air-jordan-1-mid-se-mens-shoe-P7bjRV.jpg",
    "image_url": "https://www.nike.com/t/air-jordan-1-mid-se-mens-shoe-P7bjRV/852542-146"
  },
  {
    "name": "Nike Zoom Pegasus Turbo 2\nNike Zoom Pegasus Turbo 2\nMen's Running Shoe\n8 Colors\n$180",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/1d28f6b3-42d8-4798-92af-a88fd2a9c3d4/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg",
    "image_url": "https://www.nike.com/t/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3/AT2863-008"
  },
  {
    "name": "Nike Air Zoom Pegasus 36 FlyEase\nNike Air Zoom Pegasus 36 FlyEase\nMen's Running Shoe\n6 Colors\n$120",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/e01e5168-d490-43a2-abd8-49c98efa5485/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg",
    "image_url": "https://www.nike.com/t/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV/BV0613-601"
  },
  {
    "name": "Nike Joyride Dual Run\nNike Joyride Dual Run\nMen's Running Shoe\n7 Colors\n$97.97\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7d45db00-3cd3-41b4-8f5d-1d180bebc28f/joyride-dual-run-mens-running-shoe-Gvfp81.jpg",
    "image_url": "https://www.nike.com/t/joyride-dual-run-mens-running-shoe-Gvfp81/CD4365-101"
  },
  {
    "name": "Air Jordan 6 Retro\nAir Jordan 6 Retro\nShoe\n1 Color\n$175.97\n$200",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/n87c9iafnghdqiaxpbt5/air-jordan-6-retro-shoe-mgDVSQ.jpg",
    "image_url": "https://www.nike.com/t/air-jordan-6-retro-shoe-mgDVSQ/CT5350-401"
  },
  {
    "name": "Nike Air Max Plus III\nNike Air Max Plus III\nMen's Shoe\n5 Colors\n$171.97\n$190",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/v4tjxe6v0qrn6hokf8za/air-max-plus-iii-mens-shoe-7STfbQ.jpg",
    "image_url": "https://www.nike.com/t/air-max-plus-iii-mens-shoe-7STfbQ/CJ9684-001"
  },
  {
    "name": "Nike Air Force 1 Winter GORE-TEX\nNike Air Force 1 Winter GORE-TEX\nBoot\n3 Colors\n$153.97\n$200",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/yz74fisrj06b2wc9070l/air-force-1-winter-gore-tex-boot-jl4943.jpg",
    "image_url": "https://www.nike.com/t/air-force-1-winter-gore-tex-boot-jl4943/CQ7211-001"
  },
  {
    "name": "Nike React-Type GTX\nNike React-Type GTX\nMen's Shoe\n2 Colors\n$123.97\n$160",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/wzdaz0fenhvbhuhnbw49/react-type-gtx-mens-shoe-lHpZHN.jpg",
    "image_url": "https://www.nike.com/t/react-type-gtx-mens-shoe-lHpZHN/BQ4737-002"
  },
  {
    "name": "Zoom Freak 1 Multi\nZoom Freak 1 Multi\nBasketball Shoe\n1 Color\n$120",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/3eb4b3cd-8ccd-4e19-903c-fb681f0e4e1e/zoom-freak-1-multi-basketball-shoe-9gFS6H.jpg",
    "image_url": "https://www.nike.com/t/zoom-freak-1-multi-basketball-shoe-9gFS6H/CT8476-800"
  },
  {
    "name": "Zoom Freak 1 Soul Glo\nZoom Freak 1 Soul Glo\nBasketball Shoe\n8 Colors\n$117.97\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/2bd27653-9e2a-4cc9-9eab-1c01915c1804/zoom-freak-1-soul-glo-basketball-shoe-tmk8Hw.jpg",
    "image_url": "https://www.nike.com/t/zoom-freak-1-soul-glo-basketball-shoe-tmk8Hw/BQ5422-003"
  },
  {
    "name": "Jordan Air Zoom 85 Runner\nJordan Air Zoom 85 Runner\nMen's Training Shoe\n2 Colors\n$100",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/cjqeqrn1gtnbs8q4nywv/jordan-air-zoom-85-runner-mens-training-shoe-nZDpPD.jpg",
    "image_url": "https://www.nike.com/t/jordan-air-zoom-85-runner-mens-training-shoe-nZDpPD/CI0055-106"
  },
  {
    "name": "Nike Joyride Run Flyknit\nNike Joyride Run Flyknit\nMen's Running Shoe\n10 Colors\n$134.97\n$180",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/34e2e91d-0e33-4780-8cb7-52f6d3630baa/joyride-run-flyknit-mens-running-shoe-PjmR5M.jpg",
    "image_url": "https://www.nike.com/t/joyride-run-flyknit-mens-running-shoe-PjmR5M/CT1175-001"
  },
  {
    "name": "Nike React Presto\nNike React Presto\nMen's Shoe\n8 Colors\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f612fadc-1ab9-4b02-a01e-95eed8e2bf04/react-presto-mens-shoe-c4Rbf6.jpg",
    "image_url": "https://www.nike.com/t/react-presto-mens-shoe-c4Rbf6/AV2605-007"
  },
  {
    "name": "Nike Air Max 270 Special Edition\nNike Air Max 270 Special Edition\nShoe\n2 Colors\n$130.97\n$170",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/4d988d16-fc7a-456c-943b-28c5d33fe8a7/air-max-270-special-edition-shoe-2ST4kX.jpg",
    "image_url": "https://www.nike.com/t/air-max-270-special-edition-shoe-2ST4kX/CQ6549-001"
  },
  {
    "name": "Nike Air Max 270 React\nNike Air Max 270 React\nMen's Shoe\n11 Colors\n$107.97\n$150",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/a0vhuhln1moerak2kfej/air-max-270-react-mens-shoe-bZ8t5l.jpg",
    "image_url": "https://www.nike.com/t/air-max-270-react-mens-shoe-bZ8t5l/AO4971-700"
  },
  {
    "name": "Nike x Undercover Air Max 720\nNike x Undercover Air Max 720\nShoe\n3 Colors\n$143.97\n$200",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/cqyrvdnc0mcnr4gognu0/undercover-air-max-720-shoe-bspk4f.jpg",
    "image_url": "https://www.nike.com/t/undercover-air-max-720-shoe-bspk4f/CN2408-600"
  },
  {
    "name": "Nike Air Max 720\nNike Air Max 720\nMen's Shoe\n17 Colors\n$180",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/isqhvxcva5clgvpan8q2/air-max-720-mens-shoe-Nz7NKG.jpg",
    "image_url": "https://www.nike.com/t/air-max-720-mens-shoe-Nz7NKG/AO2924-007"
  },
  {
    "name": "Nike Vaporfly 4% Flyknit\nNike Vaporfly 4% Flyknit\nRunning Shoe\n2 Colors\n$186.97\n$250",
    "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/zepdjjflfduhq1rlif8a/vaporfly-4-flyknit-running-shoe-v7G3FB.jpg",
    "image_url": "https://www.nike.com/t/vaporfly-4-flyknit-running-shoe-v7G3FB/AJ3857-400"
  },
  {
    "name": "Nike React Metcon\nNike React Metcon\nMen's Training Shoe\n4 Colors\n$150",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/1119d748-399a-47fd-a1ce-7ab951421379/react-metcon-mens-training-shoe-1G703V.jpg",
    "image_url": "https://www.nike.com/t/react-metcon-mens-training-shoe-1G703V/BQ6044-010"
  },
  {
    "name": "Nike Free X Metcon 2\nNike Free X Metcon 2\nMen's Training Shoe\n11 Colors\n$89.97\n$120",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ntapmkehmwfn7keay2v7/free-x-metcon-2-mens-training-shoe-9s2JzN.jpg",
    "image_url": "https://www.nike.com/t/free-x-metcon-2-mens-training-shoe-9s2JzN/AQ8306-061"
  },
  {
    "name": "Nike Metcon 5\nNike Metcon 5\nMen's Training Shoe\n12 Colors\n$99.97\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bsuryaliborpygbi5ljr/metcon-5-mens-training-shoe-lFwjMP.jpg",
    "image_url": "https://www.nike.com/t/metcon-5-mens-training-shoe-lFwjMP/AQ1189-001"
  },
  {
    "name": "Nike Air Flight 89\nNike Air Flight 89\nMen's Shoe\n1 Color\n$120",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bbc0d557-c39c-4f9f-9b9b-d188d5594baf/air-flight-89-mens-shoe-FWG1cB.jpg",
    "image_url": "https://www.nike.com/t/air-flight-89-mens-shoe-FWG1cB/CT8478-001"
  },
  {
    "name": "Nike Air Max 270 SE\nNike Air Max 270 SE\nMen's Shoe\n1 Color\n$170",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/24e9ad44-a956-4ec1-93f4-b43a59aaf179/air-max-270-se-mens-shoe-ckFSGJ.jpg",
    "image_url": "https://www.nike.com/t/air-max-270-se-mens-shoe-ckFSGJ/CD6615-100"
  },
  {
    "name": "Nike AlphaDunk\nNike AlphaDunk\nBasketball Shoe\n6 Colors\n$108.97\n$180",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/veiujfavsd0rrvkx22hw/alphadunk-basketball-shoe-PVlFH3.jpg",
    "image_url": "https://www.nike.com/t/alphadunk-basketball-shoe-PVlFH3/BQ5401-002"
  },
  {
    "name": "Nike Epic React Flyknit 2\nNike Epic React Flyknit 2\nMen's Running Shoe\n9 Colors\n$119.97\n$150",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/dgxtlwd9op5jzjmjfii5/epic-react-flyknit-2-mens-running-shoe-2S0Cn1.jpg",
    "image_url": "https://www.nike.com/t/epic-react-flyknit-2-mens-running-shoe-2S0Cn1/BQ8928-101"
  },
  {
    "name": "Nike SB Zoom Stefan Janoski Mid Crafted\nNike SB Zoom Stefan Janoski Mid Crafted\nMen's Skate Shoe\n3 Colors\n$59.97\n$100",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/glosmwghgrsrzjwoyhqu/sb-zoom-stefan-janoski-mid-crafted-mens-skate-shoe-M85vpQ.jpg",
    "image_url": "https://www.nike.com/t/sb-zoom-stefan-janoski-mid-crafted-mens-skate-shoe-M85vpQ/AQ7460-002"
  },
  {
    "name": "Nike Mercurial Vapor 13 Elite FG\nJust In\nNike Mercurial Vapor 13 Elite FG\nFirm-Ground Soccer Cleat\n7 Colors\n$250",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-ec274ff0-3245-4853-9de3-a5f1553640bc/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
    "image_url": "https://www.nike.com/t/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2/AQ4176-851"
  },
  {
    "name": "Kyrie 6\nKyrie 6\nBasketball Shoe\n1 Color\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/2e79a2e2-3b2f-40f7-8bae-627902e504af/kyrie-6-basketball-shoe-KQmCXH.jpg",
    "image_url": "https://www.nike.com/t/kyrie-6-basketball-shoe-KQmCXH/BQ4630-100"
  },
  {
    "name": "Nike Air Max Dia\nJust In\nNike Air Max Dia\nWomen's Shoe\n10 Colors\n$110",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/75615b2a-8536-4bf6-a8eb-e81bb93d9151/air-max-dia-womens-shoe-vT3Cl5.jpg",
    "image_url": "https://www.nike.com/t/air-max-dia-womens-shoe-vT3Cl5/CI3898-200"
  },
  {
    "name": "Nike React Gato\nJust In\nNike React Gato\nIndoor/Court Soccer Shoe\n2 Colors\n$140",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-8282da43-12d4-4bdc-8e99-fb2698649c4e/react-gato-indoor-court-soccer-shoe-7rKX9f.jpg",
    "image_url": "https://www.nike.com/t/react-gato-indoor-court-soccer-shoe-7rKX9f/CT0550-018"
  },
  {
    "name": "Nike Air Max 90 SP\nNike Air Max 90 SP\nWomen's Shoe\n1 Color\n$180",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/1efccc92-b5ce-4802-bca8-a93c3e909f87/air-max-90-sp-womens-shoe-plk6Cf.jpg",
    "image_url": "https://www.nike.com/t/air-max-90-sp-womens-shoe-plk6Cf/CQ6639-700"
  },
  {
    "name": "Nike SB Zoom Stefan Janoski RM Premium\nNike SB Zoom Stefan Janoski RM Premium\nSkate Shoe\n2 Colors\n$53.97\n$90",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/cxx9oleif175fozhl2zt/sb-zoom-stefan-janoski-rm-premium-skate-shoe-vzr9KD.jpg",
    "image_url": "https://www.nike.com/t/sb-zoom-stefan-janoski-rm-premium-skate-shoe-vzr9KD/CI2231-300"
  },
  {
    "name": "Nike Revolution 5\nNike Revolution 5\nMen's Running Shoe\n11 Colors\n$65",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/akerfosal7ptigr21k5k/revolution-5-mens-running-shoe-TzTL9k.jpg",
    "image_url": "https://www.nike.com/t/revolution-5-mens-running-shoe-TzTL9k/BQ3204-001"
  },
  {
    "name": "Nike Drop Type LX\nNike Drop Type LX\nMen's Shoe\n5 Colors\n$48.97\n$75",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/zshy2qckt6uptobhns57/drop-type-lx-mens-shoe-sFVJlr.jpg",
    "image_url": "https://www.nike.com/t/drop-type-lx-mens-shoe-sFVJlr/AV6697-001"
  },
  {
    "name": "Nike Flex Control 4\nNike Flex Control 4\nMen's Training Shoe\n4 Colors\n$65",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/e91623bb-e3c9-4452-883d-9d12d5544752/flex-control-4-mens-training-shoe-dP3qGr.jpg",
    "image_url": "https://www.nike.com/t/flex-control-4-mens-training-shoe-dP3qGr/CD0197-100"
  },
  {
    "name": "Nike Benassi JDI Fanny Pack\nNike Benassi JDI Fanny Pack\nMen's Slide\n2 Colors\n$27.97\n$55",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/zqzgpjucsk5xgztvxitm/benassi-jdi-fanny-pack-mens-slide-eKKORn.jpg",
    "image_url": "https://www.nike.com/t/benassi-jdi-fanny-pack-mens-slide-eKKORn/AO1037-601"
  },
  {
    "name": "Nike React Ianga\nNike React Ianga\nMen's Shoe\n3 Colors\n$114.97\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/mn1nrgwgu4hzwfisdtdn/react-ianga-mens-shoe-GBwZHW.jpg",
    "image_url": "https://www.nike.com/t/react-ianga-mens-shoe-GBwZHW/AV5555-002"
  },
  {
    "name": "Nike Air Max Impact\nNike Air Max Impact\nBasketball Shoe\n3 Colors\n$90",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/idzrmr1in4skgn6go6lf/air-max-impact-basketball-shoe-rT6d0G.jpg",
    "image_url": "https://www.nike.com/t/air-max-impact-basketball-shoe-rT6d0G/CI1396-003"
  },
  {
    "name": "Nike Air Max 270 React Winter\nNike Air Max 270 React Winter\nMen's Shoe\n3 Colors\n$104.97\n$160",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ow2wllhgde5brc5sjuck/air-max-270-react-winter-mens-shoe-tCkNHl.jpg",
    "image_url": "https://www.nike.com/t/air-max-270-react-winter-mens-shoe-tCkNHl/CD2049-006"
  },
  {
    "name": "Kyrie Flytrap 3\nKyrie Flytrap 3\nBasketball Shoe\n3 Colors\n$80",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/8b15b909-b2c4-454c-a904-8d0d6c3c3b2e/kyrie-flytrap-3-basketball-shoe-98K5l5.jpg",
    "image_url": "https://www.nike.com/t/kyrie-flytrap-3-basketball-shoe-98K5l5/BQ3060-100"
  },
  {
    "name": "NikeCourt Air Max Vapor Wing NRG\nNikeCourt Air Max Vapor Wing NRG\nTennis Shoe\n2 Colors\n$90",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/9a335805-93e3-4ef7-88f3-b31218a8e00c/nikecourt-air-max-vapor-wing-nrg-tennis-shoe-kXjxSx.jpg",
    "image_url": "https://www.nike.com/t/nikecourt-air-max-vapor-wing-nrg-tennis-shoe-kXjxSx/CK0833-200"
  },
  {
    "name": "Nike Air Max Axis Mid\nNike Air Max Axis Mid\nMen's Shoe\n2 Colors\n$71.97\n$110",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/d44e916a-ebcb-45a7-9806-80a4a76f6a46/air-max-axis-mid-mens-shoe-JHHfVQ.jpg",
    "image_url": "https://www.nike.com/t/air-max-axis-mid-mens-shoe-JHHfVQ/BQ4017-001"
  },
  {
    "name": "Nike Shox TL\nNike Shox TL\nMen's Shoe\n3 Colors\n$170",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/xa3j5pmlqu9lz6y1xbsb/shox-tl-mens-shoe-18V7MB.jpg",
    "image_url": "https://www.nike.com/t/shox-tl-mens-shoe-18V7MB/AV3595-002"
  },
  {
    "name": "Nike Air Max Motion 2\nNike Air Max Motion 2\nMen's Shoe\n2 Colors\n$69.97\n$85",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7ecb84ad-a330-4326-89c1-95832908ff6a/air-max-motion-2-mens-shoe-Ctfkrt.jpg",
    "image_url": "https://www.nike.com/t/air-max-motion-2-mens-shoe-Ctfkrt/AO0266-013"
  },
  {
    "name": "Nike Blazer Mid '77 Suede\nNike Blazer Mid '77 Suede\nShoe\n2 Colors\n$80.97\n$100",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/xy09elgyqwl1neuefc1q/blazer-mid-77-suede-shoe-HxFGDP.jpg",
    "image_url": "https://www.nike.com/t/blazer-mid-77-suede-shoe-HxFGDP/CI1172-200"
  },
  {
    "name": "NikeCourt Air Zoom Vapor X\nNikeCourt Air Zoom Vapor X\nMen’s Hard Court Tennis Shoe\n9 Colors\n$150",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ywev6zhcweooinkkgu6h/nikecourt-air-zoom-vapor-x-mens-hard-court-tennis-shoe-pK2RFq.jpg",
    "image_url": "https://www.nike.com/t/nikecourt-air-zoom-vapor-x-mens-hard-court-tennis-shoe-pK2RFq/AA8030-009"
  },
  {
    "name": "Nike Shox R4\nNike Shox R4\nMen's Shoe\n5 Colors\n$113.97\n$140",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/dgsw9028aziewyxf277w/shox-r4-mens-shoe-Y04R1B.jpg",
    "image_url": "https://www.nike.com/t/shox-r4-mens-shoe-Y04R1B/104265-053"
  },
  {
    "name": "Nike Air Force 1 High By You\nNike By You\nCustomize\nNike Air Force 1 High By You\nCustom Men's Shoe\n4 Colors\n$120",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/651f67df-6a1e-40f4-a5eb-02943bc5ba88/custom-nike-air-force-1-high-by-you.jpg",
    "image_url": "https://www.nike.com/u/custom-nike-air-force-1-high-by-you-10000789/502532863"
  },
  {
    "name": "Nike Free TR 8\nNike Free TR 8\nMen's Training Shoe\n2 Colors\n$100",
    "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/n6nacycdyhdyvd3l9eek/free-tr-8-mens-training-shoe-KCv0FL.jpg",
    "image_url": "https://www.nike.com/t/free-tr-8-mens-training-shoe-KCv0FL/CD9473-010"
  },
  {
    "name": "Nike Vapor Untouchable 3 Speed\nNike Vapor Untouchable 3 Speed\nMen's Football Cleat\n2 Colors\n$52.97\n$95",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/pipfczdudabfjxyhqeu5/vapor-untouchable-3-speed-mens-football-cleat-6xLMwl.jpg",
    "image_url": "https://www.nike.com/t/vapor-untouchable-3-speed-mens-football-cleat-6xLMwl/917166-400"
  },
  {
    "name": "Nike Alpha Huarache Elite 2 Low\nNike Alpha Huarache Elite 2 Low\nBaseball Cleat\n8 Colors\n$90",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/re05wh3mxb6nbjj40aez/alpha-huarache-elite-2-low-baseball-cleat-W1Bxmm.jpg",
    "image_url": "https://www.nike.com/t/alpha-huarache-elite-2-low-baseball-cleat-W1Bxmm/AJ6873-007"
  },
  {
    "name": "Nike Drop-Type Premium\nNike Drop-Type Premium\nMen's Shoe\n3 Colors\n$85",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/yiffifypfes0i1iuhmxt/drop-type-premium-mens-shoe-TPhpLd.jpg",
    "image_url": "https://www.nike.com/t/drop-type-premium-mens-shoe-TPhpLd/CN6916-400"
  },
  {
    "name": "NikeCourt Vapor X TC Knit\nNikeCourt Vapor X TC Knit\nMen's Tennis Shoe\n1 Color\n$98.97\n$120",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b36a2f74-d7e4-4f87-9ac6-3929add3ac12/nikecourt-vapor-x-tc-knit-mens-tennis-shoe-Ksfx1B.jpg",
    "image_url": "https://www.nike.com/t/nikecourt-vapor-x-tc-knit-mens-tennis-shoe-Ksfx1B/BQ0130-100"
  },
  {
    "name": "Nike Air Ghost Racer\nNike Air Ghost Racer\nMen's Shoe\n8 Colors\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ad7fb6e1-ad80-4223-aaa8-5b13f5d16e24/air-ghost-racer-mens-shoe-mnDlxl.jpg",
    "image_url": "https://www.nike.com/t/air-ghost-racer-mens-shoe-mnDlxl/AT5410-601"
  },
  {
    "name": "PG 4 By You (All Star)\nNike By You\nCustomize\nPG 4 By You (All Star)\nCustom Basketball Shoe\n6 Colors\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/acf1007c-cd1c-4eaa-ab07-c72501e3d2df/custom-pg4-by-you.jpg",
    "image_url": "https://www.nike.com/u/custom-pg4-by-you-10000797/963872653"
  },
  {
    "name": "Nike Free RN 5.0\nNike Free RN 5.0\nMen's Running Shoe\n5 Colors\n$49.97\n$100",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bb5fvmx0lhtoocexavkg/free-rn-5-mens-running-shoe-K3B5QH.jpg",
    "image_url": "https://www.nike.com/t/free-rn-5-mens-running-shoe-K3B5QH/AQ1289-003"
  },
  {
    "name": "Nike Air Max Alpha Savage\nNike Air Max Alpha Savage\nMen's Training Shoe\n9 Colors\n$110",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/3b49f441-fd89-4ce0-b890-cf1338f3cb16/air-max-alpha-savage-mens-training-shoe-n5K77G.jpg",
    "image_url": "https://www.nike.com/t/air-max-alpha-savage-mens-training-shoe-n5K77G/AT3378-011"
  },
  {
    "name": "Nike Renew Fusion\nNike Renew Fusion\nMen's Training Shoe\n5 Colors\n$85",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/3a188a30-d6e7-432e-b9ca-43c6788b2678/renew-fusion-mens-training-shoe-s43bd8.jpg",
    "image_url": "https://www.nike.com/t/renew-fusion-mens-training-shoe-s43bd8/CD0200-200"
  },
  {
    "name": "Nike Zoom Rize (Team)\nNike Zoom Rize (Team)\nBasketball Shoe\n7 Colors\n$140",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/i1-f2591c2e-5463-4825-b1d6-6d0fe2ad4db3/zoom-rize-team-basketball-shoe-bntnTz.jpg",
    "image_url": "https://www.nike.com/t/zoom-rize-team-basketball-shoe-bntnTz/BQ5468-402"
  },
  {
    "name": "Nike Air Max 200 By You\nNike By You\nCustomize\nNike Air Max 200 By You\nCustom Men's Shoe\n7 Colors\n$140",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/yrxpfnmmsbrxzhgrx2os/custom-nike-air-max-200-by-you-shoe.jpg",
    "image_url": "https://www.nike.com/u/custom-nike-air-max-200-by-you-shoe-10000680/624084688"
  },
  {
    "name": "Nike Epic Phantom React A.I.R. Cody Hudson\nNike Epic Phantom React A.I.R. Cody Hudson\nMen's Running Shoe\n1 Color\n$109.97\n$160",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/bai4flsp7sonxnj2yisg/epic-phantom-react-air-cody-hudson-mens-running-shoe-fMFQKr.jpg",
    "image_url": "https://www.nike.com/t/epic-phantom-react-air-cody-hudson-mens-running-shoe-fMFQKr/CI1718-001"
  },
  {
    "name": "Nike Air Zoom Vomero 14\nNike Air Zoom Vomero 14\nMen's Running Shoe\n10 Colors\n$140",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/osjcikt2btnisbwfuokx/air-zoom-vomero-14-mens-running-shoe-m4gpHg.jpg",
    "image_url": "https://www.nike.com/t/air-zoom-vomero-14-mens-running-shoe-m4gpHg/AH7857-008"
  },
  {
    "name": "Nike Zoom Rival M 9\nNike Zoom Rival M 9\nTrack Spike\n5 Colors\n$65",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6d7701fb-bb5e-4f3f-8fce-97ac7ab37281/zoom-rival-m-9-track-spike-mCJ29r.jpg",
    "image_url": "https://www.nike.com/t/zoom-rival-m-9-track-spike-mCJ29r/AH1020-004"
  },
  {
    "name": "Nike Zoom Pegasus Turbo 2 Shield Low By You\nNike By You\nCustomize\nNike Zoom Pegasus Turbo 2 Shield Low By You\nCustom Men's Running Shoe\n3 Colors\n$200",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6b94e7f2-f33a-4b8b-ae57-498c9d708411/custom-nike-air-zoom-pegasus-36-shield-by-you.jpg",
    "image_url": "https://www.nike.com/u/custom-nike-air-zoom-pegasus-36-shield-by-you-10000731/724158675"
  },
  {
    "name": "Nike Air Max 200 Winter\nNike Air Max 200 Winter\nMen's Shoe\n2 Colors\n$86.97\n$130",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/n3suzj1503xpq8uujgym/air-max-200-winter-mens-shoe-L6vRs7.jpg",
    "image_url": "https://www.nike.com/t/air-max-200-winter-mens-shoe-L6vRs7/BV5485-008"
  },
  {
    "name": "Nike SFB Field 2 8\"\nNike SFB Field 2 8\"\nTactical Boot\n3 Colors\n$170",
    "image": "https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/dnymaso4ypoj4cfafy0o/sfb-field-2-8-tactical-boot-gkRtlh.jpg",
    "image_url": "https://www.nike.com/t/sfb-field-2-8-tactical-boot-gkRtlh/AO7507-200"
  },
  {
    "name": "Nike Air Max2 Light\nNike Air Max2 Light\nMen's Shoe\n5 Colors\n$90.97\n$140",
    "image": "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/scql0xfb0zbin27ewies/air-max2-light-mens-shoe-TmX93M.jpg",
    "image_url": "https://www.nike.com/t/air-max2-light-mens-shoe-TmX93M/AO1741-104"
  }
]

let namesData = []
for (var i = 0; i < rawData.length; i++) {
  let simpName = rawData[i].name.split('\n')[0]
  namesData.push(simpName)
}

module.exports.namesData = namesData;