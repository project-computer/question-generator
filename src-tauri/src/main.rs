#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
mod services;
use std::collections::HashMap;
use services::pdf;
use lopdf::Document;
use lopdf::Error;

#[tauri::command]
fn greet() {
  println!("I was invoked from JS!");
}

#[tauri::command]
fn merge_documents(){
  let mut pdf_pages: HashMap<String, Vec<u32>> = HashMap::new();
  pdf_pages.insert("pdfs/temp1.pdf".to_string(), vec![1, 3, 5]);
  pdf_pages.insert("pdfs/temp2.pdf".to_string(), vec![2, 4]);

  let merged_doc: Result<Document, Error>   = pdf::merge_documents(pdf_pages);
  println!("Documents merged successfully!");
  if let Ok(doc) = merged_doc {
    let mut doc = doc;
    let _ = doc.save("merged.pdf");
  } else {
    eprintln!("Failed to merge documents");
  }
}

fn main() {
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![greet, merge_documents])
         .run(tauri::generate_context!())
         .expect("failed to run app");
}
