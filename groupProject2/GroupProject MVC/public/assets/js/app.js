$(document).ready(function() {
    $("#submit-task").on('click', function (event) {
        event.preventDefault();


        var task = $("#task-input").val().trim();
        var status = $(event.currentTarget).data("status");

        var data= {
            task,
            status,
        };

        $.ajax({
            url: "api/todos",
            method: "POST",
            data,
        }).then(
            function() {
                console.log(data)

            window.location.reload();
        });
    });

    $("#submit-status").on("click", function (event){
        event.preventDefault();
        var id = $(event.currentTarget).data("id");
        $.ajax({
            url: `api/todos/${id}/${$("#update-status").val()}`,


            method: "PUT",
        }).then(
            function() {
                console.log(id);

                window.location.reload();
            });
        
    });

    $(".view-task").on("click", function (event) {
        var id = $(event.currentTarget).closest(".task").data("id");

        $.ajax({
            url: `api/todos/${id}`,
            method: "GET",
        }).then (
            function (result) {
                $("#view-modal-task").text(result[0].task);
                $("#view-modal-status").text(result[0].status);
                $("#submit-status").data("id", result[0].id);
                $("#view-task-modal").modal('show');
            });
    });

    $(".add-todo").on("click", function(event) {
        $("#submit-task").data("status", $(event.currentTarget).data("status"));
        $("#add-task-modal").modal("show");
    });

    setDraggable($(".task"));
    $(".task-list-ul").droppable({
        accept: ".task",
        drop:(function(event, ui) {
            var cloned = ui.helper.clone().css({position: "", top: "", left: ""});
            setDraggable(cloned);
            var updatedStatus = $(event.target).data("status");
            var id = cloned.data("id");

            if (updatedStatus !== cloned.data("status")) {
                $.ajax({
                    url: `api/todos/${id}/${updatedStatus}`,
                    method: "PUT",
                }).then (
                    function () {
                        console.log("task");

                        location.reload();

                    });
                
            }
        })
    });

    function setDraggable(element) {
        element.draggable({
            start: function(event) {
                $(event.target).addClass("dragged");
            },
            stop: function(event) {
                $(event.target).removeClass("dragged");
            },

            revert: true,
        })
    };

  
});

