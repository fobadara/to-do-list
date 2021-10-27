global.document.body.innerHTML = `
  <div class="items">
    <div class="row" id="1">
      <input type="checkbox" class="no-fluid click checkbox" style="text-decoration: none;">
      <form>
        <textarea readonly="true" draggable="true" required="true" class="string" style="border: none;">
        </textarea>
        <button style="display: none;"></button>
      </form>
      <span class="more" data-data="rmv">︙</span>
      <span class="bin no-fluid" id="bin">🗑</span>
    </div>
  </div>`;