<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RegisterWithKO.aspx.cs" Inherits="KnockOut_With_AJAX.RegisterWithKO" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server" >


    <div class="container">
            <div id="ok">



                <div id="myForm" data-bind="with: MyModel">
                    <div>
                        <div >
                            <h1>registration form</h1><br>
                            <br>
                            <div class="from-group">
                                <label>full name</label>
                                <input type="text" class="form-control" data-bind="value: FullName" id="FullName" />
                            </div>
                            <div class="from-group">
                                <label> address</label>
                                <input type="text" class="form-control" data-bind="value: Address" id="Address" />
                            </div>
                            <div class="w-100"></div>
                            <br />

                            <div class="from-group">
                                <label>phone</label>
                                <input type="text" class="form-control" data-bind="value: Phone" id="Phone" />
                            </div>
                            <div class="from-group">
                                <label> email</label>
                                <input type="email" class="form-control" data-bind="value: Email" id="Email" />
                            </div>




                            <div class="from-group">
                                <label> select gender</label>
                                <select class="form-control" data-bind="
                                 value: GenderID, 
                                  options: $root.GenderList,
                                 optionsValue: 'Value', 
                                 optionsText: 'Text', 
                                    optionsCaption: '---SELECT---'" id="ddlGender">
                                 </select>
                            </div>




                            <div class="from-group">
                                <label>date of birth</label>
                                <input type="datetime-local" class="form-control" data-bind="value: DOB" id="txtdob" />
                            </div>
                            <br>
                            <div> <button class="btn-primary" data-bind="event: {click: $root.SaveInformation}" id="btnAddInformation">submit</button>
                            </div>

                            <div id="Grid">
                                
                            </div>

                        </div>

                        
                    </div>
                </div>
            </div>
        </div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js " integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo " crossorigin="anonymous "></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js " integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1 " crossorigin="anonymous "></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js " integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM " crossorigin="anonymous "></script>


     <script src="libs/jquery/jquery-3.4.1.js" type="text/javascript"></script>
    <script src="libs/jquery-ui-1.12.1.custom/jquery-ui.min.js" type="text/javascript"></script>
    <script src="js/knockout-3.3.0.js" type="text/javascript"></script>
    <script type="text/javascript" src="libs/pqGrid/knockout/ko.pqgrid.min.js"></script>
    <script src="indexVM.js" type="text/javascript"></script>
</asp:Content>

<%--libs/jquery-ui-1.12.1.custom/jquery-ui.min.js--%>
<%--js/knockout-3.3.0.js--%>