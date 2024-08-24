#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
#[tauri::command]
fn greet() {
  println!("I was invoked from JS!");
}

fn main() {
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![greet])
         .run(tauri::generate_context!())
         .expect("failed to run app");
}
