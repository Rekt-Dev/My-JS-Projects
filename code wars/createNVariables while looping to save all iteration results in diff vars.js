/*

The loop will create new variable names at run time (varName1, varName2, varName3...). I concatenate the index i with the varName for unique variable names (it seems logic to me because the index is the only value changing throughout the loop).

The output will give you n times new variables (depending on how big your data array is) with their corresponding values.
*/


var CampAdGR = ss.getRange("A9").getValue();
var data = ss.getRange("A23:A").getValues();

for (var i = 0; i < data.length; i++) {
    if (data[i][0] == CampAdGR) {
        var varName = varName.concat('aName' + data[i]);
    }
}