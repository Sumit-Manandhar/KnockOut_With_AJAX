const pqOptions = {
    width: "auto",
    height: 250,
    showTitle: false,
    showHeader: true,
    showTop: true,
    showToolbar: false,
    showBottom: true,
    wrap: true,
    hwrap: false,
    sortable: false,
    editable: false,
    resizable: false,
    collapsible: false,
    draggable: true,
    dragColumns: { enabled: true },
    scrollModel: { autoFit: true },
    numberCell: { show: true, resizable: true, title: "S.N.", minWidth: 30 },
    pageModel: { curPage: 1, rPP: 10, type: "local" },
    columnTemplate: { wrap: true, editable: false, dataType: "string", halign: "center", hvalign: "center", resizable: true, styleHead: { 'font-weight': "bold" } },
};

function IndexVM() {
    const self = this;

    var isNullOrEmpty = function(str) {
        if (str === undefined || str === null) {
            return true;
        } else if (typeof str === "string") {
            return (str.trim() === "");
        } else {
            return false;
        }
    };
    
    function LoadRecords() {
        $.ajax({
            url: "api/registration/getData",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                debugger;
                if (data.d) {
                    var tbl = '<table border="1"><tr><td>FullName</td><td>Address</td><td>Email</td><td>Phone</td><td>GenderName</td><td>DOB</td></tr>';
                    $.each(data.d, function (i, item) {
                        tbl += '<tr><td>' + item.FullName + '</td>';
                        tbl += '<td>' + item.Address + '</td>';
                        tbl += '<td>' + item.Email + '</td>';
                        tbl += '<td>' + item.Phone + '</td>';
                        tbl += '<td>' + item.GenderName + '</td>';
                        tbl += '<td>' + item.DOB + '</td>';
                        tbl += '<td><input type="button" value="Edit"></td></tr>';
                    });
                    tbl += '</table>';
                    $("#Grid").html(tbl);
                }
                else {
                    alert("Error");
                    $("#Grid").html('');
                }
            }
        })
    };
 


    const models = {
        MyModel: function(item) {
            item = item || {};
            this.FullName = ko.observable(item.FullName || "");
            this.Address = ko.observable(item.Address || "");
            this.Email = ko.observable(item.Email || "");
            this.Phone = ko.observable(item.Phone || "");

            //  this.Age = ko.observable(item.Age || 1);
           
            this.GenderID = ko.observable(item.GenderID || "");
            this.GenderName = ko.observable(item.GenderName || "");
            this.DOB = ko.observable(item.DOB || "")
          
            




        },
        UiElements: function() {
            self.MyModel = ko.observable(new models.MyModel());
            self.DataList = ko.observableArray([]);
            self.GenderList = ko.observableArray([
                { Text: 'Male', Value: '1' },
                { Text: 'Female', Value: '0' }
            ]);
        },
    };

    self.SaveInformation = function() {

        if (UiEvents.validate.SaveValidation()) {
           

            alert("success")
        }
    };



    const UiEvents = {
        validate: {
            SaveValidation: function() {
                if (isNullOrEmpty(self.MyModel().FullName())) {
                    alert("enter the name!!!");
                    return false;
                } else if (isNullOrEmpty(self.MyModel().GenderID())) {
                    alert("Gender cannot be empty...!!!");
                    return false;

                } else if (isNullOrEmpty(self.MyModel().Address())) {
                    alert("please enter the address!!!");
                    return false;

                }
                else if (isNullOrEmpty(self.MyModel().DOB())) {
                    alert("please enter the dob!!!");
                    return false;

                }
                else {
                    self.MyModel().GenderName((self.GenderList().find(X => X.Value == self.MyModel().GenderID()) || {}).Text);
                   

                    $.ajax({
                        type: "POST",
                        url: 'api/registration/insert', 
                        data: JSON.stringify(ko.toJS(self.MyModel())) ,
                   
                        dataType: "json",
                       
                        contentType: "application/json; charset=utf-8",
                        success: function (data) {

                            alert("data has been inserted successfully");
                            LoadRecords();

                        },
                        error: function () {
                            alert("Error while inserting data");
                        }
                    });
                   

                    return true;
                }
            }
        },



    };

    function Init() {
        models.UiElements();

    }
    Init();
}

var obj;

$(document).ready(function() {
    obj = new IndexVM();
    ko.applyBindings(obj);

});