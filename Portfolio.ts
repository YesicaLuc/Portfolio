$(document).ready(() => {
    // Activar edición al hacer clic en el botón de edición
    $(".btn-edit").on("click", function () {
      // Obtener el elemento editable correspondiente
    const editable = $(this).closest(".editable");
      // Deshabilitar la edición de otros elementos
    $(".editable").removeClass("editing");
      // Habilitar la edición del elemento actual
    editable.addClass("editing");
      // Obtener el contenido actual del elemento
    const title = editable.find("h2").text();
    const description = editable.find("p").text();
      // Mostrar un modal para editar el contenido
    showModal(title, description, (newTitle, newDescription) => {
        // Actualizar el contenido del elemento
        editable.find("h2").text(newTitle);
        editable.find("p").text(newDescription);
        // Deshabilitar la edición del elemento
        editable.removeClass("editing");
    });
    });
});

  // Función para mostrar el modal de edición
function showModal(title: string, description: string, callback: Function) {
    // Mostrar el modal
    // ...
    // Agregar el contenido actual al modal
    $("#edit-title").val(title);
    $("#edit-description").val(description);
    // Agregar un evento de clic al botón de guardar
    $("#btn-save").on("click", () => {
      // Obtener el nuevo título y descripción
    const newTitle = $("#edit-title").val() as string;
    const newDescription = $("#edit-description").val() as string;
      // Ejecutar el callback con el nuevo contenido
    callback(newTitle, newDescription);
      // Cerrar el modal
      // ...
    });
}