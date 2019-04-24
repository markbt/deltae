var N=null,E="",T="t",U="u",searchIndex={};
var R=["deltae","labvalue","valueresult","lchvalue","round_to","to_vec","xyzvalue","to_lab","result","to_string","to_owned","clone_into","try_from","borrow_mut","try_into","deltae::color","type_id","string","borrow","typeid","demethod","default","formatter","from_str","DEMethod","LabValue","LchValue","XyzValue","ValueError","Calculate Delta E (color difference) between two colors in…","Parse a value from a string","The associated error which can be returned from parsing.","Parses a string `s` to return a value of this type.","Manipulate and convert CIE L*a*b* and Lch colors.","OutOfBounds","BadFormat","ValueResult","New `LabValue` from 3 `f64`s","Convert `LabValue` to `LchValue`","hue_radians","Round `LabValue` to nearest decimal places.","Returns an array of [L, a, b]","Returns a `Vec<f64>` of [L, a, b]","New `LchValue` from 3 `f64`s","Convert `LchValue` to `LabValue`","Round `LchValue` to nearest decimal places.","Returns an array of [L, c, h]","Returns a `Vec<f64>` of [L, c, h]","New `XyzValue` from 3 `f64`s","New `DeltaE` from `LabValues` and `DEMethod`.","Round `DeltaE` value and its components to nearest decimal…","Parse `DeltaE` from `&str`'s","New `LabValue` from `&str`","New `LchValue` from `&str`","New `XyzValue` from `&str`","Parse `DEMethod` from `&str`. Always returns `Ok()`.…","description"];

searchIndex[R[0]]={"doc":R[29],"i":[[8,"FromStr",R[0],R[30],N,N],[16,"Err",E,R[31],0,N],[10,R[23],E,R[32],0,[[["str"]],[R[8]]]],[3,"DeltaE",E,E,N,N],[12,"method",E,E,1,N],[12,"value",E,E,1,N],[12,"color0",E,E,1,N],[12,"color1",E,E,1,N],[4,R[24],E,E,N,N],[13,"DE2000",E,E,2,N],[13,"DE1994",E,E,2,N],[13,"DE1994T",E,E,2,N],[13,"DE1976",E,E,2,N],[13,"DECMC1",E,E,2,N],[13,"DECMC2",E,E,2,N],[0,"color",E,R[33],N,N],[3,R[25],R[15],E,N,N],[12,"l",E,E,3,N],[12,"a",E,E,3,N],[12,"b",E,E,3,N],[3,R[26],E,E,N,N],[12,"l",E,E,4,N],[12,"c",E,E,4,N],[12,"h",E,E,4,N],[3,R[27],E,E,N,N],[12,"x",E,E,5,N],[12,"y",E,E,5,N],[12,"z",E,E,5,N],[4,R[28],E,E,N,N],[13,R[34],E,E,6,N],[13,R[35],E,E,6,N],[6,R[36],E,E,N,N],[11,"new",E,R[37],3,[[["f64"],["f64"],["f64"]],[R[2],[R[1]]]]],[11,"to_lch",E,R[38],3,[[["self"]],[R[3]]]],[11,"chroma",E,E,3,[[["self"]],["f64"]]],[11,"hue",E,E,3,[[["self"]],["f64"]]],[11,R[39],E,E,3,[[["self"]],["f64"]]],[11,"to_xyz",E,E,3,[[["self"]],[R[6]]]],[11,R[4],E,R[40],3,[[["self"],["i32"]],[R[1]]]],[11,"to_a",E,R[41],3,N],[11,R[5],E,R[42],3,[[["self"]],["vec",["f64"]]]],[11,"new",E,R[43],4,[[["f64"],["f64"],["f64"]],[R[2],[R[3]]]]],[11,R[7],E,R[44],4,[[["self"]],[R[1]]]],[11,R[4],E,R[45],4,[[["self"],["i32"]],[R[3]]]],[11,"to_a",E,R[46],4,N],[11,R[5],E,R[47],4,[[["self"]],["vec",["f64"]]]],[11,"new",E,R[48],5,[[["f64"],["f64"],["f64"]],[R[2],[R[6]]]]],[11,R[7],E,E,5,[[["self"]],[R[1]]]],[11,R[4],E,E,5,[[["self"],["i32"]],[R[6]]]],[11,"new",R[0],R[49],1,[[[R[1]],[R[1]],[R[20]]],[R[0]]]],[11,R[4],E,R[50],1,[[["self"],["i32"]],["self"]]],[11,"from",E,R[51],1,[[["str"],["str"],["str"]],[R[2],[R[0]]]]],[11,R[9],E,E,1,[[["self"]],[R[17]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[["self"]],[U]]],[11,R[10],E,E,1,[[["self"]],[T]]],[11,R[11],E,E,1,N],[11,R[12],E,E,1,[[[U]],[R[8]]]],[11,R[18],E,E,1,[[["self"]],[T]]],[11,R[16],E,E,1,[[["self"]],[R[19]]]],[11,R[13],E,E,1,[[["self"]],[T]]],[11,R[14],E,E,1,[[["self"]],[R[8]]]],[11,R[9],E,E,2,[[["self"]],[R[17]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[["self"]],[U]]],[11,R[10],E,E,2,[[["self"]],[T]]],[11,R[11],E,E,2,N],[11,R[12],E,E,2,[[[U]],[R[8]]]],[11,R[18],E,E,2,[[["self"]],[T]]],[11,R[16],E,E,2,[[["self"]],[R[19]]]],[11,R[13],E,E,2,[[["self"]],[T]]],[11,R[14],E,E,2,[[["self"]],[R[8]]]],[11,R[9],R[15],E,3,[[["self"]],[R[17]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[["self"]],[U]]],[11,R[10],E,E,3,[[["self"]],[T]]],[11,R[11],E,E,3,N],[11,R[12],E,E,3,[[[U]],[R[8]]]],[11,R[18],E,E,3,[[["self"]],[T]]],[11,R[16],E,E,3,[[["self"]],[R[19]]]],[11,R[13],E,E,3,[[["self"]],[T]]],[11,R[14],E,E,3,[[["self"]],[R[8]]]],[11,R[9],E,E,4,[[["self"]],[R[17]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[["self"]],[U]]],[11,R[10],E,E,4,[[["self"]],[T]]],[11,R[11],E,E,4,N],[11,R[12],E,E,4,[[[U]],[R[8]]]],[11,R[18],E,E,4,[[["self"]],[T]]],[11,R[16],E,E,4,[[["self"]],[R[19]]]],[11,R[13],E,E,4,[[["self"]],[T]]],[11,R[14],E,E,4,[[["self"]],[R[8]]]],[11,R[9],E,E,5,[[["self"]],[R[17]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[["self"]],[U]]],[11,R[10],E,E,5,[[["self"]],[T]]],[11,R[11],E,E,5,N],[11,R[12],E,E,5,[[[U]],[R[8]]]],[11,R[18],E,E,5,[[["self"]],[T]]],[11,R[16],E,E,5,[[["self"]],[R[19]]]],[11,R[13],E,E,5,[[["self"]],[T]]],[11,R[14],E,E,5,[[["self"]],[R[8]]]],[11,R[9],E,E,6,[[["self"]],[R[17]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[["self"]],[U]]],[11,R[12],E,E,6,[[[U]],[R[8]]]],[11,R[18],E,E,6,[[["self"]],[T]]],[11,R[16],E,E,6,[[["self"]],[R[19]]]],[11,R[13],E,E,6,[[["self"]],[T]]],[11,R[14],E,E,6,[[["self"]],[R[8]]]],[11,"eq",E,E,3,[[["self"],[R[1]]],["bool"]]],[11,"ne",E,E,3,[[["self"],[R[1]]],["bool"]]],[11,"eq",E,E,4,[[["self"],[R[3]]],["bool"]]],[11,"ne",E,E,4,[[["self"],[R[3]]],["bool"]]],[11,"eq",E,E,5,[[["self"],[R[6]]],["bool"]]],[11,"ne",E,E,5,[[["self"],[R[6]]],["bool"]]],[11,"eq",R[0],E,1,[[["self"],[R[0]]],["bool"]]],[11,"ne",E,E,1,[[["self"],[R[0]]],["bool"]]],[11,"eq",E,E,2,[[["self"],[R[20]]],["bool"]]],[11,R[21],R[15],E,3,[[],[R[1]]]],[11,R[21],E,E,4,[[],[R[3]]]],[11,R[21],E,E,5,[[],[R[6]]]],[11,R[21],R[0],E,2,[[],[R[20]]]],[11,"clone",R[15],E,3,[[["self"]],[R[1]]]],[11,"clone",E,E,4,[[["self"]],[R[3]]]],[11,"clone",E,E,5,[[["self"]],[R[6]]]],[11,"clone",R[0],E,1,[[["self"]],[R[0]]]],[11,"clone",E,E,2,[[["self"]],[R[20]]]],[11,"fmt",R[15],E,3,[[["self"],[R[22]]],[R[8]]]],[11,"fmt",E,E,4,[[["self"],[R[22]]],[R[8]]]],[11,"fmt",E,E,5,[[["self"],[R[22]]],[R[8]]]],[11,"fmt",E,E,6,[[["self"],[R[22]]],[R[8]]]],[11,"fmt",R[0],E,1,[[["self"],[R[22]]],[R[8]]]],[11,"fmt",E,E,2,[[["self"],[R[22]]],[R[8]]]],[11,"fmt",R[15],E,3,[[["self"],[R[22]]],[R[8]]]],[11,"fmt",E,E,4,[[["self"],[R[22]]],[R[8]]]],[11,"fmt",E,E,5,[[["self"],[R[22]]],[R[8]]]],[11,"fmt",E,E,6,[[["self"],[R[22]]],[R[8]]]],[11,"fmt",R[0],E,1,[[["self"],[R[22]]],[R[8]]]],[11,"fmt",E,E,2,[[["self"],[R[22]]],[R[8]]]],[11,R[23],R[15],R[52],3,[[["str"]],[R[2],[R[1]]]]],[11,R[23],E,R[53],4,[[["str"]],[R[2],[R[3]]]]],[11,R[23],E,R[54],5,[[["str"]],[R[2],[R[6]]]]],[11,R[23],R[0],R[55],2,[[["str"]],[R[8],[R[20]]]]],[11,R[56],R[15],E,6,[[["self"]],["str"]]]],"p":[[8,"FromStr"],[3,"DeltaE"],[4,R[24]],[3,R[25]],[3,R[26]],[3,R[27]],[4,R[28]]]};
searchIndex[r_aa]={"doc":R[29],"i":[[8,r_Ga,r_aa,R[30],N,N],[16,"Err",E,R[31],0,N],[10,r_Ea,E,R[32],0,[[[r_Fa]],[r_ka]]],[3,r_Ha,E,E,N,N],[12,"method",E,E,1,N],[12,"value",E,E,1,N],[12,"color0",E,E,1,N],[12,"color1",E,E,1,N],[4,r_Ia,E,E,N,N],[13,"DE2000",E,E,2,N],[13,"DE1994",E,E,2,N],[13,"DE1994T",E,E,2,N],[13,"DE1976",E,E,2,N],[13,"DECMC1",E,E,2,N],[13,"DECMC2",E,E,2,N],[0,"color",E,R[33],N,N],[3,r_Ja,r_wa,E,N,N],[12,"l",E,E,3,N],[12,"a",E,E,3,N],[12,"b",E,E,3,N],[3,r_Ka,E,E,N,N],[12,"l",E,E,4,N],[12,"c",E,E,4,N],[12,"h",E,E,4,N],[3,r_La,E,E,N,N],[12,"x",E,E,5,N],[12,"y",E,E,5,N],[12,"z",E,E,5,N],[4,r_Ma,E,E,N,N],[13,R[34],E,E,6,N],[13,R[35],E,E,6,N],[6,R[36],E,E,N,N],[11,"new",E,R[37],3,[[[r_ca],[r_ca],[r_ca]],[r_ea,[r_da]]]],[11,"to_lch",E,R[38],3,[[[r_ba]],[r_fa]]],[11,"chroma",E,E,3,[[[r_ba]],[r_ca]]],[11,"hue",E,E,3,[[[r_ba]],[r_ca]]],[11,R[39],E,E,3,[[[r_ba]],[r_ca]]],[11,"to_xyz",E,E,3,[[[r_ba]],[r_ia]]],[11,r_ga,E,R[40],3,[[[r_ba],["i32"]],[r_da]]],[11,"to_a",E,R[41],3,N],[11,r_ha,E,R[42],3,[[[r_ba]],["vec",[r_ca]]]],[11,"new",E,R[43],4,[[[r_ca],[r_ca],[r_ca]],[r_ea,[r_fa]]]],[11,r_ja,E,R[44],4,[[[r_ba]],[r_da]]],[11,r_ga,E,R[45],4,[[[r_ba],["i32"]],[r_fa]]],[11,"to_a",E,R[46],4,N],[11,r_ha,E,R[47],4,[[[r_ba]],["vec",[r_ca]]]],[11,"new",E,R[48],5,[[[r_ca],[r_ca],[r_ca]],[r_ea,[r_ia]]]],[11,r_ja,E,E,5,[[[r_ba]],[r_da]]],[11,r_ga,E,E,5,[[[r_ba],["i32"]],[r_ia]]],[11,"new",r_aa,R[49],1,[[[r_da],[r_da],[r_za]],[r_aa]]],[11,r_ga,E,R[50],1,[[[r_ba],["i32"]],[r_ba]]],[11,r_na,E,R[51],1,[[[r_Fa],[r_Fa],[r_Fa]],[r_ea,[r_aa]]]],[11,r_la,E,E,1,[[[r_ba]],[r_ma]]],[11,r_na,E,E,1,[[[T]],[T]]],[11,r_xa,E,E,1,[[[r_ba]],[U]]],[11,r_oa,E,E,1,[[[r_ba]],[T]]],[11,r_pa,E,E,1,N],[11,r_qa,E,E,1,[[[U]],[r_ka]]],[11,r_ra,E,E,1,[[[r_ba]],[T]]],[11,r_sa,E,E,1,[[[r_ba]],[r_ka]]],[11,r_ta,E,E,1,[[[r_ba]],[T]]],[11,r_ua,E,E,1,[[[r_ba]],[r_va]]],[11,r_la,E,E,2,[[[r_ba]],[r_ma]]],[11,r_na,E,E,2,[[[T]],[T]]],[11,r_xa,E,E,2,[[[r_ba]],[U]]],[11,r_oa,E,E,2,[[[r_ba]],[T]]],[11,r_pa,E,E,2,N],[11,r_qa,E,E,2,[[[U]],[r_ka]]],[11,r_ra,E,E,2,[[[r_ba]],[T]]],[11,r_sa,E,E,2,[[[r_ba]],[r_ka]]],[11,r_ta,E,E,2,[[[r_ba]],[T]]],[11,r_ua,E,E,2,[[[r_ba]],[r_va]]],[11,r_la,r_wa,E,3,[[[r_ba]],[r_ma]]],[11,r_na,E,E,3,[[[T]],[T]]],[11,r_xa,E,E,3,[[[r_ba]],[U]]],[11,r_oa,E,E,3,[[[r_ba]],[T]]],[11,r_pa,E,E,3,N],[11,r_qa,E,E,3,[[[U]],[r_ka]]],[11,r_ra,E,E,3,[[[r_ba]],[T]]],[11,r_sa,E,E,3,[[[r_ba]],[r_ka]]],[11,r_ta,E,E,3,[[[r_ba]],[T]]],[11,r_ua,E,E,3,[[[r_ba]],[r_va]]],[11,r_la,E,E,4,[[[r_ba]],[r_ma]]],[11,r_na,E,E,4,[[[T]],[T]]],[11,r_xa,E,E,4,[[[r_ba]],[U]]],[11,r_oa,E,E,4,[[[r_ba]],[T]]],[11,r_pa,E,E,4,N],[11,r_qa,E,E,4,[[[U]],[r_ka]]],[11,r_ra,E,E,4,[[[r_ba]],[T]]],[11,r_sa,E,E,4,[[[r_ba]],[r_ka]]],[11,r_ta,E,E,4,[[[r_ba]],[T]]],[11,r_ua,E,E,4,[[[r_ba]],[r_va]]],[11,r_la,E,E,5,[[[r_ba]],[r_ma]]],[11,r_na,E,E,5,[[[T]],[T]]],[11,r_xa,E,E,5,[[[r_ba]],[U]]],[11,r_oa,E,E,5,[[[r_ba]],[T]]],[11,r_pa,E,E,5,N],[11,r_qa,E,E,5,[[[U]],[r_ka]]],[11,r_ra,E,E,5,[[[r_ba]],[T]]],[11,r_sa,E,E,5,[[[r_ba]],[r_ka]]],[11,r_ta,E,E,5,[[[r_ba]],[T]]],[11,r_ua,E,E,5,[[[r_ba]],[r_va]]],[11,r_la,E,E,6,[[[r_ba]],[r_ma]]],[11,r_na,E,E,6,[[[T]],[T]]],[11,r_xa,E,E,6,[[[r_ba]],[U]]],[11,r_qa,E,E,6,[[[U]],[r_ka]]],[11,r_ra,E,E,6,[[[r_ba]],[T]]],[11,r_sa,E,E,6,[[[r_ba]],[r_ka]]],[11,r_ta,E,E,6,[[[r_ba]],[T]]],[11,r_ua,E,E,6,[[[r_ba]],[r_va]]],[11,r_ya,E,E,3,[[],[r_da]]],[11,r_ya,E,E,4,[[],[r_fa]]],[11,r_ya,E,E,5,[[],[r_ia]]],[11,r_ya,r_aa,E,2,[[],[r_za]]],[11,r_Aa,r_wa,E,3,[[[r_ba]],[r_da]]],[11,r_Aa,E,E,4,[[[r_ba]],[r_fa]]],[11,r_Aa,E,E,5,[[[r_ba]],[r_ia]]],[11,r_Aa,r_aa,E,1,[[[r_ba]],[r_aa]]],[11,r_Aa,E,E,2,[[[r_ba]],[r_za]]],[11,"eq",r_wa,E,3,[[[r_ba],[r_da]],[r_Ba]]],[11,"ne",E,E,3,[[[r_ba],[r_da]],[r_Ba]]],[11,"eq",E,E,4,[[[r_ba],[r_fa]],[r_Ba]]],[11,"ne",E,E,4,[[[r_ba],[r_fa]],[r_Ba]]],[11,"eq",E,E,5,[[[r_ba],[r_ia]],[r_Ba]]],[11,"ne",E,E,5,[[[r_ba],[r_ia]],[r_Ba]]],[11,"eq",r_aa,E,1,[[[r_ba],[r_aa]],[r_Ba]]],[11,"ne",E,E,1,[[[r_ba],[r_aa]],[r_Ba]]],[11,"eq",E,E,2,[[[r_ba],[r_za]],[r_Ba]]],[11,r_Da,r_wa,E,3,[[[r_ba],[r_Ca]],[r_ka]]],[11,r_Da,E,E,4,[[[r_ba],[r_Ca]],[r_ka]]],[11,r_Da,E,E,5,[[[r_ba],[r_Ca]],[r_ka]]],[11,r_Da,E,E,6,[[[r_ba],[r_Ca]],[r_ka]]],[11,r_Da,r_aa,E,1,[[[r_ba],[r_Ca]],[r_ka]]],[11,r_Da,E,E,2,[[[r_ba],[r_Ca]],[r_ka]]],[11,r_Da,r_wa,E,3,[[[r_ba],[r_Ca]],[r_ka]]],[11,r_Da,E,E,4,[[[r_ba],[r_Ca]],[r_ka]]],[11,r_Da,E,E,5,[[[r_ba],[r_Ca]],[r_ka]]],[11,r_Da,E,E,6,[[[r_ba],[r_Ca]],[r_ka]]],[11,r_Da,r_aa,E,1,[[[r_ba],[r_Ca]],[r_ka]]],[11,r_Da,E,E,2,[[[r_ba],[r_Ca]],[r_ka]]],[11,r_Ea,r_wa,R[52],3,[[[r_Fa]],[r_ea,[r_da]]]],[11,r_Ea,E,R[53],4,[[[r_Fa]],[r_ea,[r_fa]]]],[11,r_Ea,E,R[54],5,[[[r_Fa]],[r_ea,[r_ia]]]],[11,r_Ea,r_aa,R[55],2,[[[r_Fa]],[r_ka,[r_za]]]],[11,R[56],r_wa,E,6,[[[r_ba]],[r_Fa]]]],"p":[[8,r_Ga],[3,r_Ha],[4,r_Ia],[3,r_Ja],[3,r_Ka],[3,r_La],[4,r_Ma]]};
initSearch(searchIndex);addSearchOptions(searchIndex);