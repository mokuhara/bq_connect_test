import React from 'react'
import  { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core"

import { useDispatch }  from "react-redux"
import { fetchAsyncGetData } from "../covidSlice"

const useStyles = makeStyles((theme)=>({
    formControl: {
        marginBottom: theme.spacing(3),
        minWidth: 320,
    }
}))

const SwitchPrefecture: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const prefectures = [
        {eng:"Mie",jap:"三重県"},
        {eng:"Kyoto",jap:"京都府"},
        {eng:"Saga",jap:"佐賀県"},
        {eng:"Hyogo",jap:"兵庫県"},
        {eng:"Hokkaido",jap:"北海道"},
        {eng:"Chiba",jap:"千葉県"},
        {eng:"Saitama",jap:"埼玉県"},
        {eng:"Oita",jap:"大分県"},
        {eng:"Osaka",jap:"大阪府"},
        {eng:"Nara",jap:"奈良県"},
        {eng:"Miyagi",jap:"宮城県"},
        {eng:"Miyazaki",jap:"宮崎県"},
        {eng:"Toyama",jap:"富山県"},
        {eng:"Yamaguchi",jap:"山口県"},
        {eng:"Yamagata",jap:"山形県"},
        {eng:"Yamanashi",jap:"山梨県"},
        {eng:"Gifu",jap:"岐阜県"},
        {eng:"Okayama",jap:"岡山県"},
        {eng:"Iwate",jap:"岩手県"},
        {eng:"Shimane",jap:"島根県"},
        {eng:"Hiroshima",jap:"広島県"},
        {eng:"Tokushima",jap:"徳島県"},
        {eng:"Ehime",jap:"愛媛県"},
        {eng:"Aichi",jap:"愛知県"},
        {eng:"Niigata",jap:"新潟県"},
        {eng:"Tokyo",jap:"東京都"},
        {eng:"Tochigi",jap:"栃木県"},
        {eng:"Okinawa",jap:"沖縄県"},
        {eng:"Shiga",jap:"滋賀県"},
        {eng:"Kumamoto",jap:"熊本県"},
        {eng:"Ishikawa",jap:"石川県"},
        {eng:"Fukui",jap:"福井県"},
        {eng:"Fukuoka",jap:"福岡県"},
        {eng:"Fukushima",jap:"福島県"},
        {eng:"Akita",jap:"秋田県"},
        {eng:"Gunma",jap:"群馬県"},
        {eng:"Ibaraki",jap:"茨城県"},
        {eng:"Nagasaki",jap:"長崎県"},
        {eng:"Nagano",jap:"長野県"},
        {eng:"Aomori",jap:"青森県"},
        {eng:"Shizuoka",jap:"静岡県"},
        {eng:"Kagawa",jap:"香川県"},
        {eng:"Kochi",jap:"高知県"},
        {eng:"Tottori",jap:"鳥取県"},
        {eng:"Wakayama",jap:"和歌山県"},
        {eng:"Kanagawa",jap:"神奈川県"},
        {eng:"Kagoshima",jap:"鹿児島県"}
    ]

    return (
        <FormControl className={classes.formControl}>
          <NativeSelect
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              dispatch(fetchAsyncGetData(e.target.value))
            }
          >
            {prefectures.map((prefecture, i) => (
              <option key={i} value={prefecture.eng}>
                {prefecture.jap}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      );
}

export default SwitchPrefecture
