package com.kmirim.stock.services;
import com.kmirim.stock.entities.Stock;
import org.springframework.beans.factory.annotation.Autowired;
import com.kmirim.stock.repositories.StockRepository;
import org.springframework.stereotype.Service;

@Service
public class StockService {
    @Autowired
    private StockRepository stockRepository;

    public Stock getById(Long id) {
        return stockRepository.findById(id).orElseThrow();
    }

    public void saveStock(Stock stock) {
        stockRepository.save(stock);
    }

    public void updateStock(Stock stock, Long id) {
        Stock exist = stockRepository.findById(id).orElseThrow();
        exist.setName(stock.getName());
        exist.setPrice(stock.getPrice());
        stockRepository.save(exist);
    }

    public void deleteById(Long id) {
        stockRepository.deleteById(id);
    }
}