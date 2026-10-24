const states = [
 "Andhra Pradesh", "Arunachal Pradesh", "Assam",
 "Bihar", "Chhattisgarh", "Goa", "Gujarat",
 "Haryana", "Himachal Pradesh", "Jharkhand",
 "Karnataka", "Kerala", "Madhya Pradesh",
 "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
 "Nagaland", "Odisha", "Punjab", "Rajasthan",
 "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
 "Uttar Pradesh", "Uttarakhand", "West Bengal"
];
const filteredStates = states.filter(function (state) {
 const firstLetter = state[0].toLowerCase();
 return !"aeiou".includes(firstLetter);
});
console.log(filteredStates);