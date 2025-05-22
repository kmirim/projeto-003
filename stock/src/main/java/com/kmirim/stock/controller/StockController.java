package com.kmirim.stock.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.kmirim.stock.entities.Stock;
import com.kmirim.stock.services.StockService;

@RestController
@RequestMapping(path = "/api/stock")

public class StockController {
    @Autowired
    public StockService stockService;

    @GetMapping("{id}")
    public ResponseEntity<Stock> getStock(@PathVariable Long id) {
        Stock byId = stockService.getById(id);
        return ResponseEntity.ok(byId);
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody Stock stock) {
        stockService.saveStock(stock);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<Void> save(@RequestBody Stock stock, @PathVariable Long id) {
        stockService.updateStock(stock, id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        stockService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}