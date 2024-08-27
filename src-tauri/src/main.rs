#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
#[tauri::command]
fn greet() {
  println!("I was invoked from JS!");
}
mod services;
use services::{pdf};
fn main() {
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![greet, pdf::merge_documents])
         .run(tauri::generate_context!())
         .expect("failed to run app");
}
